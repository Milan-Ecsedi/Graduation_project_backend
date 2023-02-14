import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Course from "./course.entity";
import User from "./user.entity";




@Entity()
export default class AppliedUser{

@PrimaryGeneratedColumn()
id:number;

@ManyToOne(() => User, (user) => user.applications)
user: User;


@ManyToOne(()=> Course,(course)=>course.id)
course:Course;


@Column('date')
apply_date: Date;

}