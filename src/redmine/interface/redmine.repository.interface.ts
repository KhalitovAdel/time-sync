import { RedmineEntity } from '../redmine.entity';

export interface IRedmineRepository {
  create(issueId: string, hours: number, comments: string, spentOn?: Date): Promise<RedmineEntity>;
  delete(id: string): Promise<void>;
}
