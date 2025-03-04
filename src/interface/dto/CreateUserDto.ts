// src/interface/dto/CreateUserDto.ts
import { IsString, IsDate } from "class-validator";

export class CreateUserDto {
  @IsString()
  title!: string;

  @IsString()
  author!: string;

  @IsDate()
  publishedDate!: Date;
}
