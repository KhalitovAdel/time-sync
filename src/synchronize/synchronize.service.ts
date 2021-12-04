import { Inject, Injectable, Logger } from '@nestjs/common';
import { IRecipient, ISender } from './interface/recipient.interface';
import { IEntry, IRawEntry } from './interface/entry.interface';
import { Parties } from './enum/parties.enum';

@Injectable()
export class SynchronizeService {
  @Inject(Parties.SENDER)
  private readonly sender: ISender;

  @Inject(Parties.RECIPIENT)
  private readonly recipient: IRecipient<IRawEntry>;

  private readonly logger = new Logger(this.constructor.name);

  async syncTimeEntries(senderEntry: IEntry): Promise<void> {
    if (!senderEntry.canBeSynchronized()) return;

    this.logger.log(`Start synchronize ${senderEntry.getId()}`);
    const recipientEntry = await this.recipient.create(senderEntry.getIssueId(), senderEntry.getHours(), senderEntry.getDescription(), senderEntry.getDate());

    try {
      await this.sender.markAsSynchronized(senderEntry);
    } catch (e) {
      await this.recipient.delete(recipientEntry);
      this.logger.error(e);
    }
    this.logger.log(`Success synchronize ${senderEntry.getId()}`);
  }

  async list(): Promise<void> {
    const entries = new Array<IEntry>();
    try {
      entries.push(...(await this.sender.list()));
      this.logger.error(`Found ${entries.length} entries`);
    } catch (e) {
      this.logger.error(`Error while listing entries ${e}`);
    }

    await Promise.all(entries.map((el) => this.syncTimeEntries(el)));
  }
}
