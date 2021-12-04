import { Inject, Injectable, Logger } from '@nestjs/common';
import { TmetricEntity } from './tmetric.entity';
import { ITmetricRepository } from './interface/tmetric.repository.interface';
import { TmetricApi } from './tmetric.api';
import * as moment from 'moment';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TmetricService {
  private readonly logger = new Logger(this.constructor.name);
  constructor(@Inject(TmetricApi) private readonly repository: ITmetricRepository) {}

  update(entity: TmetricEntity, toUpdate: { markAsSynchronize: boolean }): Promise<void> {
    if (typeof toUpdate.markAsSynchronize === 'boolean') {
      toUpdate.markAsSynchronize ? entity.markAsSuccessSynchronized() : entity.markAsErrorSynchronized();
    }

    return this.repository.updateOne(entity);
  }

  async list(): Promise<TmetricEntity[]> {
    const startDate = moment().add(-2, 'days');

    const isoString = startDate.toISOString();
    this.logger.log(`Start listing from ${isoString}`);

    return this.repository.list(isoString);
  }
}
