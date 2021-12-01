import { ITMetricTimeEntriesDomainModelsTimeEntry, ITMetricTimeEntriesDomainModelsTimeEntryDetailLegacy } from '../generated/tmetric-api/data-contracts';

export class TmetricEntity implements ITMetricTimeEntriesDomainModelsTimeEntry {
  public details: ITMetricTimeEntriesDomainModelsTimeEntryDetailLegacy;
  public endTime: string | null;
  public isBillable: boolean | null;
  public isDeleted: boolean;
  public isInvoiced: boolean;
  public projectName: string | null;
  public startTime: string;
  public tagsIdentifiers: number[] | null;
  public timeEntryId: number;
  public timerDuration: number | null;

  public successIntegration = '[ok]';
  public errorIntegration = '[error]';
  private symbols = [/\[/, /]/];

  getId(): string {
    return String(this.timeEntryId);
  }

  hasId(): boolean {
    return !!this.timeEntryId;
  }

  isSynchronized(): boolean {
    return this.getDescription().includes(this.errorIntegration) || this.getDescription().includes(this.successIntegration);
  }

  isSynchronizedSuccess(): boolean {
    return this.getDescription().includes(this.successIntegration);
  }

  markAsSuccessSynchronized(): this {
    const newDescription = this.getDescription().replace(this.errorIntegration, '').trim();

    this.details.description = this.successIntegration.concat(' ', this.clearDescription(newDescription));
    return this;
  }

  private clearDescription(str: string): string {
    return this.symbols.reduce((acc, curr) => {
      return acc.replace(curr, '');
    }, str);
  }

  markAsErrorSynchronized(): this {
    const newDescription = this.getDescription().replace(this.successIntegration, '').trim();
    this.details.description = this.errorIntegration.concat(' ', newDescription);

    return this;
  }

  getDate(): Date {
    if (!this.endTime) throw new Error('Not Null expected');

    return new Date(this.endTime);
  }

  canBeSynchronized(): boolean {
    return this.details?.projectTask?.externalIssueId && this.endTime && !this.isSynchronized();
  }

  getIssueId(): string {
    const raw = this.details?.projectTask?.externalIssueId?.replace('#', '');
    if (!raw) throw new Error(`Cannot fond issue from time entry id = ${this.getId()}`);

    return raw;
  }

  getHours(): number {
    if (!this.endTime) throw new Error(`Entry ${this.getId()} active`);
    const durationMs = new Date(this.endTime).getTime() - new Date(this.startTime).getTime();
    return durationMs / (1000 * 60 * 60);
  }

  getDescription(): string {
    return this.details.description || 'WITHOUT_DESCRIPTION';
  }
}
