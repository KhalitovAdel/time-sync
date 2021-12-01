import { Api } from '../generated/tmetric-api/Api';
import { ConfigService } from '@nestjs/config';
import { plainToInstance } from 'class-transformer';
import { TmetricEntity } from './tmetric.entity';
import { ITmetricRepository } from './interface/tmetric.repository.interface';
import { Inject, Injectable } from '@nestjs/common';
import { TmetricHttpClient } from './tmetric.http-client';

@Injectable()
export class TmetricApi extends Api implements ITmetricRepository {
  constructor(@Inject(TmetricHttpClient) public readonly http: TmetricHttpClient, @Inject(ConfigService) private readonly cfg: ConfigService<NodeJS.ProcessEnv>) {
    super(http);
  }

  private async upsert(entity: TmetricEntity): Promise<void> {
    await this.timeEntriesPost(Number(this.cfg.get('TMETRIC_ACCOUNT_ID')), Number(this.cfg.get('TMETRIC_PROFILE_ID')), entity);
  }

  public async updateOne(entity: TmetricEntity): Promise<void> {
    if (!entity.hasId()) throw new Error(`Cannot update entity without id`);
    await this.upsert(entity);
  }

  public async list(startDate: string): Promise<TmetricEntity[]> {
    const { data } = await this.timeEntriesGet(Number(this.cfg.get('TMETRIC_ACCOUNT_ID')), Number(this.cfg.get('TMETRIC_PROFILE_ID')), { StartTime: startDate });

    return plainToInstance(TmetricEntity, data);
  }
}
