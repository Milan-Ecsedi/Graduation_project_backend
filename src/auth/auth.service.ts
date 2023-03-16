import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import Token from './token.entity';
import * as crypto from 'crypto';
import User from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {

constructor(private dataSource:DataSource){}


    async findUserByToken(token:string){

    const tokenRepo=this.dataSource.getRepository(Token);
    const tokenObj=await tokenRepo.findOne({
        where:{token},
        relations:{user:true},
    });
    if(tokenObj===null){
        return null;
    }
    return tokenObj.user;
    }


    async createToken(user:User){

    const tokenGenerate=crypto.randomBytes(32);
    const tokenString=tokenGenerate.toString('hex');

    const token=new Token();
    token.user=user;
    token.token=tokenString;
    await this.dataSource.getRepository(Token).insert(token);

    return tokenString;
    }

}
