import { Injectable } from '@nestjs/common';
import { CategoriaDoTweet } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoriadotweetDto } from './dto/create-categoriadotweet.dto';
import { UpdateCategoriadotweetDto } from './dto/update-categoriadotweet.dto';

@Injectable()
export class CategoriadotweetService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCategoriadotweetDto): Promise<CategoriaDoTweet> {
    return await this.prisma.categoriaDoTweet.create({data});
  }

  async findAll(): Promise<CategoriaDoTweet[]> {
    return await this.prisma.categoriaDoTweet.findMany();
  }

  // async findOne(id: number): Promise<CategoriaDoTweet> {
  //   return await this.prisma.categoriaDoTweet.findUnique({where: {id}});
  // }

  // async update(id: number, data: UpdateCategoriadotweetDto): Promise<CategoriaDoTweet> {
  //   return await this.prisma.categoriaDoTweet.update({data, where: {id}});
  // }

  // async remove(id: number): Promise<CategoriaDoTweet> {
  //   return await this.prisma.categoriaDoTweet.delete({where: {id}});
  // }
}
