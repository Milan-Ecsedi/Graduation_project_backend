import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";


export default class LoginDto{
  @IsNotEmpty()
  @ApiProperty({
    description:'Email: Kötelező kitölteni',
    type:'string'
  })
  email: string;

  @IsNotEmpty()
  @ApiProperty({
    description:'jelszó: kötelező kitölteni',
    type:'string'
  })
  password: string;


}