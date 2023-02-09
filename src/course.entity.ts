import { application } from "express";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import AppliedUser from "./applied_user.entity";


@Entity()
export default class Course{

@PrimaryGeneratedColumn()
id:number;

@OneToMany(()=>AppliedUser, (appliedUser) =>  appliedUser.course)
AppliedCourse: AppliedUser[];

@Column()
course_name:string;

@Column()
course_description:string;

//További oszlopok elképzelve: video_url | image_url , a kurzusokhoz eltárolando video/ kép linkje (Szintugy nemtom)
//                              Lesson, Nemtom...Tananyag leirva stringben vagy mi(?), még nincs ötletem hogy azt hogyan csináljuk meg.

}

