import { IsNotEmpty, IsOptional } from "class-validator";

/**
 * Egy kurzus regisztrálására alkalmas validáció osztály
 */
export class CreateCourseDto {
 /**
     * Kurzus név, kötelező
     */
 @IsNotEmpty()
 course_name: string;
 
 /**
  * Kurzus leírása, kötelező
  */
 @IsNotEmpty()
 course_description: string;


 /**
  * Borito kép, opcionális
  */
 @IsOptional()
 cover_photo:string;


 @IsNotEmpty()
 subject: string;

 @IsNotEmpty()
 topic:string;

 @IsNotEmpty()
 starting_date: string;




}
