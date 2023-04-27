import { ApiProperty } from "@nestjs/swagger";
import Course from "src/course/entities/course.entity";
import User from "src/user/entities/user.entity";


export class CreateAppliedUserDto {

    @ApiProperty({
        description:'Kurzus, adatbázisból keresi ki így validáció nem szükséges',
        type:'Course'
    })
    course: Course;

    @ApiProperty({
        description:'Felhasználó, adatbázisból keresi ki így validáció nem szükséges',
        type: 'User'
    })
    user: User;
    
    @ApiProperty({
        description:'Felhasználó Jelentkezési dátuma, backend adja ki'
    })
    applyDate: Date;
}
