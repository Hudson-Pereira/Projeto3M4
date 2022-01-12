import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateSeguindoDto {
  @IsNotEmpty()
  @IsInt()
  idseguido: number;
 
}
