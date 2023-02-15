import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Course from "./course.entity";
import User from "./user.entity";




@Entity()
export default class AppliedUser{

@PrimaryGeneratedColumn()
id:number;

/**
 * Összeköti a többi tábláával, lásd course.etity.ts-t és user.entity.ts-t
 */
@ManyToOne(() => User, (user) => user.applications)
user: User;


@ManyToOne(()=> Course,(course)=>course.id)
course:Course;


/**
 * A felhasználó jelentezési dátuma
 */
@Column('date')
apply_date: Date;

}