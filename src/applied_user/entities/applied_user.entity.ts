
import Course from "src/course/entities/course.entity";
import User from "src/user/entities/user.entity";

import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

/**
 * Felhasználók akik jelentkeztek az adott kurzusra.
 */
@Entity()
export default class AppliedUser{

@PrimaryGeneratedColumn()
id:number;

/**
 * Összeköti a többi táblával, lásd course.etity.ts-t és user.entity.ts-t
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
