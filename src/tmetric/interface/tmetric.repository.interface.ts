import { TmetricEntity } from '../tmetric.entity';

export interface ITmetricRepository {
  updateOne(entity: TmetricEntity): Promise<void>;

  list(startDate: string): Promise<TmetricEntity[]>;
}
