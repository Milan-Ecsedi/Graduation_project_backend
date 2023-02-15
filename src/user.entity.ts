import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import AppliedUser from "./applied_user.entity";

/**
 * Felhasználó táblát jelképezi az adatbázisban
 */
@Entity()
export default class Users{

@PrimaryGeneratedColumn()
id:number;

/**
 * Össze köti az applied user táblában az id-jét
 */
@OneToMany(()=>AppliedUser, (appliedUser) => appliedUser.user)
applications: AppliedUser[];

@Column()
username:string;

@Column()
password:string;

@Column()
email: string;
}


