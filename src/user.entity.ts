import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import AppliedUser from "./applied_user.entity";


@Entity()
export default class User{

@PrimaryGeneratedColumn()
id:number;

@OneToMany(()=>AppliedUser, (appliedUser) => appliedUser.user)
applications: AppliedUser[];

@Column()
username:string;

@Column()
password:string;

@Column()
email: string;
}


