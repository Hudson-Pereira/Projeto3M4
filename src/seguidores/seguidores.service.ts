import { Injectable } from '@nestjs/common';
import { CreateSeguidoreDto } from './dto/create-seguidore.dto';
import { UpdateSeguidoreDto } from './dto/update-seguidore.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Seguidores, Prisma } from '@prisma/client';

@Injectable()
export class SeguidoresService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.SeguidoresUncheckedCreateInput): Promise<Seguidores> {
    return await this.prisma.seguidores.create({data});
  }

  async findAll(): Promise<Seguidores[]> {
    return await this.prisma.seguidores.findMany();
  }

  async findOne(id: number): Promise<Seguidores> {
    return await this.prisma.seguidores.findUnique({where: {id}});
  }

  async update(id: number, data: UpdateSeguidoreDto): Promise<Seguidores> {
    return await this.prisma.seguidores.update({data, where: {id}});
  }

  async remove(id: number): Promise<Seguidores> {
    return await this.prisma.seguidores.delete({where: {id}});
  }
}
