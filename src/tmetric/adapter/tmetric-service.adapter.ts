import { TmetricService } from '../tmetric.service';
import { TmetricEntity } from '../tmetric.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TmetricServiceAdapter {
  constructor(private readonly service: TmetricService) {}

  public markAsSynchronized(entity: TmetricEntity): Promise<void> {
    return this.service.update(entity, { markAsSynchronize: true });
  }

  public list(): Promise<TmetricEntity[]> {
    return this.service.list().then((data) => data.filter((el) => !el.isSynchronized()));
  }
}
