import { IsDefined, IsEmail, IsNotEmpty } from "class-validator";

export default class RegisterDto {
  
  /**
   * Ellenőrzi hogy a regisztrálásnál megfelelő-e a formátum
   */
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @IsEmail()
  email:string;


  
}
