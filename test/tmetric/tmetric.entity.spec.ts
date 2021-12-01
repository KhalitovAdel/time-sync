import { TmetricEntity } from '../../src/tmetric/tmetric.entity';
import { plainToInstance } from 'class-transformer';
import { rawEntity } from './mocks/tmetric.raw-entity';

describe('TmetricEntity', () => {
  let entity: TmetricEntity;

  beforeEach(async () => {
    entity = plainToInstance(TmetricEntity, rawEntity);
  });

  it('should TmetricEntity.markAsSuccessSynchronized works', async () => {
    const description = entity.getDescription();
    entity.markAsSuccessSynchronized();
    expect(entity.getDescription()).toEqual(`${entity.successIntegration} ${description}`);
  });
});
