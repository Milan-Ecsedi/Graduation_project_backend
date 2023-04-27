import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsEmail, IsUrl} from "class-validator";

export class CreateUserDto {
   
  @IsNotEmpty()
  @ApiProperty({
    description:'felhasználó név: kötelező megadni',
    type:'string'
  })
  username: string;

  
  @IsNotEmpty()
  @ApiProperty({
    description:'jelszó: kötelező megadni',
    type:'string'
  })
  password: string;


  
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    description:'Email cím: Kötelező megadni és email cím kell hogy legyen'
  })
  email:string;

  @ApiProperty({
    description:'profilkép: Alapértelmezett értéket kap, updateProfile függvényen lehet frissíteni'
  })
  profile_pic:string;

}
