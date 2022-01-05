import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateTweetDto {
  @IsNotEmpty()
  @IsString()
  texto: string;

  @IsNotEmpty()
  @IsString()
  emoji: string;

  @IsNotEmpty()
  @IsInt()
  curtidas: number;

  @IsNotEmpty()
  @IsInt()
  usuarioid: number;
}
