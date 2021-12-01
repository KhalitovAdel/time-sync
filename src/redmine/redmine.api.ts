import { Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { IRaw, IRawResponse } from './interface/raw.interface';
import { ICreate } from './interface/create.interface';
import { IRedmineRepository } from './interface/redmine.repository.interface';
import { plainToInstance } from 'class-transformer';
import { RedmineEntity } from './redmine.entity';

@Injectable()
export class RedmineApi implements IRedmineRepository {
  private readonly subject: string;

  constructor(private readonly http: HttpService, @Inject(ConfigService) private readonly cfg: ConfigService<NodeJS.ProcessEnv>) {
    this.subject = this.cfg.get('REDMINE_SUBJECT');
  }

  public async create(issueId: string, hours: number, comments: string, spentOn?: Date): Promise<RedmineEntity> {
    const payload: ICreate = {
      issue_id: Number(issueId),
      hours,
      comments,
      user_id: Number(this.cfg.get('REDMINE_USER_ID')),
      activity_id: Number(this.cfg.get('REDMINE_ACTIVITY_ID')),
      spent_on: spentOn ? spentOn.toISOString().split('T')[0] : undefined,
    };

    const { data } = await this.http
      .request<IRawResponse>({
        url: `${this.subject}.json`,
        method: 'POST',
        data: {
          time_entry: payload,
        },
      })
      .toPromise();

    return plainToInstance(RedmineEntity, data.time_entry);
  }

  async delete(id: string): Promise<void> {
    await this.http
      .request<IRaw>({
        url: `${this.subject}/${id}.json`,
        method: 'DELETE',
      })
      .toPromise();
  }
}
