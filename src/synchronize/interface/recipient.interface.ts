import { IEntry } from './entry.interface';

export interface IRecipient<T> {
  create(issueId: string, hours: number, comment: string, date: Date): Promise<T>;
  delete(entity: T): Promise<unknown>;
}

export interface ISender {
  markAsSynchronized(entity: IEntry): Promise<unknown>;
  list(): Promise<IEntry[]>;
}
