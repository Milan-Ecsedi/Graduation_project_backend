import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import AppliedUser from "./applied_user.entity";

/**
 * Felhasználó táblát jelöli az adatbázisban
 */
@Entity()
export default class User{

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


