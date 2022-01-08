import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateTweetDto {
  @IsNotEmpty()
  @IsString()
  texto: string;

  @IsNotEmpty()
  @IsInt()
  usuarioid: number; 
}
