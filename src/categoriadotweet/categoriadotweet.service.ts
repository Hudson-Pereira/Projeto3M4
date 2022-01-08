import { Injectable } from '@nestjs/common';
import { CreateCategoriadotweetDto } from './dto/create-categoriadotweet.dto';
import { UpdateCategoriadotweetDto } from './dto/update-categoriadotweet.dto';

@Injectable()
export class CategoriadotweetService {
  create(createCategoriadotweetDto: CreateCategoriadotweetDto) {
    return 'This action adds a new categoriadotweet';
  }

  findAll() {
    return `This action returns all categoriadotweet`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoriadotweet`;
  }

  update(id: number, updateCategoriadotweetDto: UpdateCategoriadotweetDto) {
    return `This action updates a #${id} categoriadotweet`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoriadotweet`;
  }
}
