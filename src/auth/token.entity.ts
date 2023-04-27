import User from "src/user/entities/user.entity";
import { Entity,  ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export default class Token{

    /**
     * Felhasználó Token-je
     */
@PrimaryColumn()
token:string;

/**
 * Össze kapcsolja a token-t a felhasználó azonosítójával
 */
@ManyToOne(()=> User, (user) => user.id)
user:User;

}