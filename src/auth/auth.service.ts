import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import Token from './token.entity';
import * as crypto from 'crypto';
import User from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {

constructor(private dataSource:DataSource){}


/**
 * Kikeresi a felhasználót token alapján
 * @param token felhasználói token
 * @returns token alapján megtalált felhasználót 
 */
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


    /**
     * 
     * @param user Felhasználó
     * @returns generált token-t string-ként
     */
    async createToken(user:User){

    const tokenGenerate=crypto.randomBytes(32);
    const tokenString=tokenGenerate.toString('hex');

    const token=new Token();
    token.user=user;
    token.token=tokenString;
    await this.dataSource.getRepository(Token).insert(token);

    return tokenString;
    }

    /**
     * Kitörli a megadott token-t
     * @param token felhasználó token-je
     */
    async logout(token) {
        const tokenRepo = this.dataSource.getRepository(Token);
        const tokenObj =  await tokenRepo.findOne({where: {token}, 
            relations : {user: true}
         });
        await tokenRepo.delete(tokenObj)
      
    }

}
