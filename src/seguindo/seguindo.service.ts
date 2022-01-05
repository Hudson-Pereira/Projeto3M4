import { Injectable } from '@nestjs/common';
import { CreateSeguindoDto } from './dto/create-seguindo.dto';
import { UpdateSeguindoDto } from './dto/update-seguindo.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Seguindo, Prisma } from '@prisma/client';

@Injectable()
export class SeguindoService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.SeguindoUncheckedCreateInput): Promise<Seguindo> {
    return await this.prisma.seguindo.create({data});
  }

  async findAll(): Promise<Seguindo[]> {
    return await this.prisma.seguindo.findMany();
  }

  async findOne(id: number): Promise<Seguindo> {
    return await this.prisma.seguindo.findUnique({where: {id}});
  }

  async update(id: number, data: UpdateSeguindoDto): Promise<Seguindo> {
    return await this.prisma.seguindo.update({data, where: {id}});
  }

  async remove(id: number): Promise<Seguindo> {
    return await this.prisma.seguindo.delete({where: {id}});
  }
}
