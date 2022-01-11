import { Injectable } from '@nestjs/common';
import { Favoritos, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFavoritoDto } from './dto/create-favorito.dto';
import { UpdateFavoritoDto } from './dto/update-favorito.dto';

@Injectable()
export class FavoritosService {
  constructor(private prisma: PrismaService) {}
  
  async create(data: Prisma.FavoritosUncheckedCreateInput): Promise<Favoritos> {
    return await this.prisma.favoritos.create({data});
  }

  async findAll(): Promise<Favoritos[]> {
    return await this.prisma.favoritos.findMany();
  }
//verificar como fazer o crud da many-to-many
  // async findOne(id: number): Promise<Favoritos> {
  //   return await this.prisma.favoritos.findUnique({where: {id}});
  // }

  // async update(id: number, data: UpdateFavoritoDto): Promise<Favoritos> {
  //   return await this.prisma.favoritos.update({data, where: {id}});
  // }

  // async remove(id: number): Promise<Favoritos> {
  //   return await this.prisma.favoritos.delete({where: {id}});
  // }
}
