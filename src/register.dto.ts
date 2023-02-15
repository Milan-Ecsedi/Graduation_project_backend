import { IsDefined, IsEmail, IsNotEmpty } from "class-validator";

/**
 * Egy felhasználó regisztrálására alkalmas validáció osztály
 */
export default class RegisterDto {
  
  /**
   * név, nem lehet üres
   */
  @IsNotEmpty()
  username: string;

  /**
   * Jelszó: nem lehet üres. Nincs rajta IsStrongPassword egyenlőre
   */
  @IsNotEmpty()
  password: string;


  /**
   * Email cím: Csak akkor fogad el ha nem üres a mező és megfelelő email cím pl: example@gmail.com
   */
  @IsNotEmpty()
  @IsEmail()
  email:string;


  
}
