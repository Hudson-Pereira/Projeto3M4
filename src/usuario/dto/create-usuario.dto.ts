import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateUsuarioDto {
  @IsNotEmpty()
  @IsString()
  nome: string;
  
  @IsNotEmpty()
  @IsString()
  imagem: string;
  
  @IsNotEmpty()
  @IsString()
  bio: string;
 
  @IsNotEmpty()
  @IsInt()
  nasc: number;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  senha: string;
}
