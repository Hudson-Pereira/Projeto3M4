import { IsNotEmpty, IsString } from "class-validator";

export class CreateSeguindoDto {
  @IsNotEmpty()
  @IsString()
  idSeguindo: number;
 
}
