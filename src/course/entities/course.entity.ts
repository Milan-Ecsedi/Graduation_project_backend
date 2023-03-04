import { application } from "express";
import AppliedUser from "src/applied_user/entities/applied_user.entity";

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

/**
 * A kurzus táblát jelképezi az adatbázisban
 */
@Entity()
export default class Course{

@PrimaryGeneratedColumn()
id:number;
/**
 * összeköti az id-t a course id-val az applied course-ban
 */
@OneToMany(()=>AppliedUser, (appliedUser) =>  appliedUser.course)
AppliedCourse: AppliedUser[];


/**
 * A kurzus név
 */
@Column()
course_name:string;

/**
 * leírása a kurzusnak, ide kerülnek a részletek
 */
@Column()
course_description:string;

/**
 * A boritó kép url-je, a mérete mindegy mert be van álítva fixre
 */
@Column()
cover_photo: string;

/**
 * A tantárgy, Matematika, történelem, fizika stb...
 */
@Column()
subject: string;

/**
 * témája, másodfokú egyenlet, 1900-as évek történelme, egyenes arányú gyorsaság stb...
 */
@Column()
topic:string;

@Column()
starting_date: string;


}