import { IsInt, IsNotEmpty } from "class-validator";

export class CreateFavoritoDto {
    @IsNotEmpty()
    @IsInt()
    tweetid: number;

    @IsNotEmpty()
    @IsInt()
    usuarioid: number;
}
