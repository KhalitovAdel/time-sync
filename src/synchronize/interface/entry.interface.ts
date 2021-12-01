export interface IRawEntry {
  getId(): string;
}

export interface IEntry extends IRawEntry {
  canBeSynchronized(): boolean;
  getIssueId(): string;
  getHours(): number;
  getDescription(): string;
  getDate(): Date;
}
