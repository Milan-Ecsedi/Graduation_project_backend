
import AppliedUser from "src/applied_user/entities/applied_user.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

/**
 * Felhasználó táblát jelképezi az adatbázisban
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
