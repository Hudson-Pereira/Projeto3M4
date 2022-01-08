import { IsInt, IsNotEmpty } from "class-validator";

export class CreateCategoriadotweetDto {
    @IsNotEmpty()
    @IsInt()
    tweetid: number;

    @IsNotEmpty()
    @IsInt()
    categoriaid: number;
}
