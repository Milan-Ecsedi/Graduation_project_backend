import { IsDefined, IsEmail } from "class-validator";

export default class NewUserDataDto {
  
  /**
   * Ellenőrzi hogy a regisztrálásnál megfelelő-e a formátum
   */
  @IsDefined({message: 'A név megadása kötelező'})
  username: string;

  @IsDefined({message:'A jelszó megadása kötelező'})
  password: string;

  @IsEmail()
  email:string;


  
}
