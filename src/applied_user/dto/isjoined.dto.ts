import { IsBoolean } from "class-validator";

export class isJoinedDto{

    @IsBoolean()
    joined: boolean;

}