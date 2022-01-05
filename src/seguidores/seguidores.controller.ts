import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SeguidoresService } from './seguidores.service';
import { CreateSeguidoreDto } from './dto/create-seguidore.dto';
import { UpdateSeguidoreDto } from './dto/update-seguidore.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('seguidores')
export class SeguidoresController {
  constructor(private readonly seguidoresService: SeguidoresService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createSeguidoreDto: CreateSeguidoreDto) {
    return this.seguidoresService.create(createSeguidoreDto);
  }

  @Get()
  findAll() {
    return this.seguidoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seguidoresService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() updateSeguidoreDto: UpdateSeguidoreDto) {
    return this.seguidoresService.update(+id, updateSeguidoreDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.seguidoresService.remove(+id);
  }
}
