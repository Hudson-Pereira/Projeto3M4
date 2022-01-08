import { PartialType } from '@nestjs/swagger';
import { CreateCategoriadotweetDto } from './create-categoriadotweet.dto';

export class UpdateCategoriadotweetDto extends PartialType(CreateCategoriadotweetDto) {}
