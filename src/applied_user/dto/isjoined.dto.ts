import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean } from "class-validator";

export class isJoinedDto{

    @IsBoolean()
    @ApiProperty({
        description:'jelentkezett-e',
        type:'boolean'
    })
    joined: boolean;

}