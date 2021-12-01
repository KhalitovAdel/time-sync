import { Inject, Injectable } from '@nestjs/common';
import { TmetricEntity } from './tmetric.entity';
import { ITmetricRepository } from './interface/tmetric.repository.interface';
import { TmetricApi } from './tmetric.api';

@Injectable()
export class TmetricService {
  constructor(@Inject(TmetricApi) private readonly repository: ITmetricRepository) {}

  update(entity: TmetricEntity, toUpdate: { markAsSynchronize: boolean }): Promise<void> {
    if (typeof toUpdate.markAsSynchronize === 'boolean') {
      toUpdate.markAsSynchronize ? entity.markAsSuccessSynchronized() : entity.markAsErrorSynchronized();
    }

    return this.repository.updateOne(entity);
  }

  list(): Promise<TmetricEntity[]> {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 2);
    return this.repository.list(startDate.toISOString());
  }
}
