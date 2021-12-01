import { Inject, Injectable } from '@nestjs/common';
import { RedmineEntity } from './redmine.entity';
import { IRedmineRepository } from './interface/redmine.repository.interface';
import { RedmineApi } from './redmine.api';

@Injectable()
export class RedmineService {
  constructor(@Inject(RedmineApi) private readonly repository: IRedmineRepository) {}

  async create(issueId: string, hours: number, comments: string, spentOn?: Date): Promise<RedmineEntity> {
    return await this.repository.create(issueId, hours, comments, spentOn);
  }

  async delete(entity: RedmineEntity): Promise<void> {
    await this.repository.delete(entity.getId());
  }
}
