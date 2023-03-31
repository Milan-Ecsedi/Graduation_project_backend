import Course from "src/course/entities/course.entity";
import User from "src/user/entities/user.entity";

export class CreateAppliedUserDto {

    course: Course;
    user: User;
    applyDate: Date;
}
