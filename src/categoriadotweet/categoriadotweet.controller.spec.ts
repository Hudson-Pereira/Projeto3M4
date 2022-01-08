import { Test, TestingModule } from '@nestjs/testing';
import { CategoriadotweetController } from './categoriadotweet.controller';
import { CategoriadotweetService } from './categoriadotweet.service';

describe('CategoriadotweetController', () => {
  let controller: CategoriadotweetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriadotweetController],
      providers: [CategoriadotweetService],
    }).compile();

    controller = module.get<CategoriadotweetController>(CategoriadotweetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
