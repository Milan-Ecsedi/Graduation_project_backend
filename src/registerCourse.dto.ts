import { IsNotEmpty, IsOptional } from "class-validator";



export default class RegisterCourseDto{


    @IsNotEmpty()
    course_name: string;

    @IsNotEmpty()
    course_description: string;

    @IsOptional()
    cover_photo:string;

    @IsNotEmpty()
    subject: string;

    @IsNotEmpty()
    topic:string;




}