import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateSeguindoDto {
  @IsNotEmpty()
  @IsInt()
  idSeguindo: number;
 
}
