import { IsNotEmpty, IsEmail} from "class-validator";

export class CreateUserDto {
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

  profilePicture:string;

}
