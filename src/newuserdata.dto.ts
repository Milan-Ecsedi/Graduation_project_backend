import { IsDefined, IsEmail } from "class-validator";

export default class NewUserDataDto {
  
  @IsDefined({message: 'A név megadása kötelező'})
  username: string;

  @IsDefined({message:'A jelszó megadása kötelező'})
  password: string;

  @IsEmail()
  email:string;


  
}
