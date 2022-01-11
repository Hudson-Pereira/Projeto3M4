import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriadotweetService } from './categoriadotweet.service';
import { CreateCategoriadotweetDto } from './dto/create-categoriadotweet.dto';
import { UpdateCategoriadotweetDto } from './dto/update-categoriadotweet.dto';

@Controller('categoriadotweet')
export class CategoriadotweetController {
  constructor(private readonly categoriadotweetService: CategoriadotweetService) {}

  @Post()
  create(@Body() createCategoriadotweetDto: CreateCategoriadotweetDto) {
    return this.categoriadotweetService.create(createCategoriadotweetDto);
  }

  @Get()
  findAll() {
    return this.categoriadotweetService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.categoriadotweetService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCategoriadotweetDto: UpdateCategoriadotweetDto) {
  //   return this.categoriadotweetService.update(+id, updateCategoriadotweetDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.categoriadotweetService.remove(+id);
  // }
}
