/* eslint-disable prettier/prettier */
import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import User from 'src/user/entities/user.entity';
import { DataSource } from 'typeorm';
import { AuthService } from './auth.service';
import LoginDto from './login.dto';
import * as bcrypt from 'bcrypt';

@Controller('auth')
export class AuthController {
  constructor(
    private dataSource: DataSource,
    private authService: AuthService,
  ) {}

  @Post('login')
  async login(@Body() loginData: LoginDto) {
    const userRepo = this.dataSource.getRepository(User);
    const user = await userRepo.findOneBy({ email: loginData.email });
    if (user === null) {
      throw new UnauthorizedException('Hibás email vagy jelszó');
    }
    if (!(await bcrypt.compare(loginData.password, user.password))) {
      throw new UnauthorizedException('Hibás email vagy jelszó');
    }

    return {
      token: await this.authService.createToken(user),
    };
  }
}
