import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateSeguidoreDto {
  @IsNotEmpty()
  @IsInt()
  idseguidor: number;
 
}
