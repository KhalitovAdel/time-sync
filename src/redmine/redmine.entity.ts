import { Activity, IRaw, Issue, Project, User } from './interface/raw.interface';

export class RedmineEntity implements IRaw {
  public id: number;
  public activity: Activity;
  public comments: string;
  public created_on: Date;
  public hours: number;
  public issue: Issue;
  public project: Project;
  public spent_on: string;
  public updated_on: Date;
  public user: User;

  getId(): string {
    return String(this.id);
  }
}
