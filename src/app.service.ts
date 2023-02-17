import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

   async getPW(pw) : Promise<string>{

    const password= bcrypt.hash(pw , 10) 

    return password
  }

}
