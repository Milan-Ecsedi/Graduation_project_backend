import User from "src/user/entities/user.entity";
import { Entity, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export default class Token{

@PrimaryColumn()
token:string;

@ManyToOne(()=> User, (user) => user.id)
user:User;

}