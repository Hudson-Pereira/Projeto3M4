import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDate, IsEmail, IsInt, IsNotEmpty, IsString, IsUrl } from 'class-validator';

const moment = require("moment");

export class CreateUsuarioDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'Hudson Oliveira',
    description: `O nome será utilizado para identificar o usuário.` ,
  })
  nome: string;

  @IsNotEmpty()
  @IsString()
  sobrenome: string;

  @IsNotEmpty()
  @IsString()
  username: string;
  
  @IsNotEmpty()
  @IsUrl()
  imagem: string;
  
  @IsNotEmpty()
  @IsString()
  bio: string;
 
  @IsNotEmpty()
  // @Transform(nasc => moment(nasc).format('DD/MM/YY'))
  @IsString()
  nasc: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  senha: string;
}
