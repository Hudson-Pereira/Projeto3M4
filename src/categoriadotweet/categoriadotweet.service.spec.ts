import { Test, TestingModule } from '@nestjs/testing';
import { CategoriadotweetService } from './categoriadotweet.service';

describe('CategoriadotweetService', () => {
  let service: CategoriadotweetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriadotweetService],
    }).compile();

    service = module.get<CategoriadotweetService>(CategoriadotweetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
