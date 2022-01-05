import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateSeguidoreDto {
  @IsNotEmpty()
  @IsString()
  idSeguidor: number;
 
}
