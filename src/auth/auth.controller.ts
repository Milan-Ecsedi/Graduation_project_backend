/* eslint-disable prettier/prettier */
import { Body, Headers, Controller, Post, UnauthorizedException, UseGuards, Delete } from '@nestjs/common';
import User from 'src/user/entities/user.entity';
import { DataSource } from 'typeorm';
import { AuthService } from './auth.service';
import LoginDto from './login.dto';
import * as bcrypt from 'bcrypt';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiHeader, ApiOperation, ApiParam, ApiUnauthorizedResponse } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(
    private dataSource: DataSource,
    private authService: AuthService,
  ) {}

  @Post('login')
  @ApiOperation({
    description:'Bejelentkezteti a felhasználót',
  })
  @ApiUnauthorizedResponse({
    description:'Ha nem megfelelő email vagy jelszót ad meg'
  })
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

  @UseGuards(AuthGuard('bearer'))
  @Delete('logout')
  @ApiOperation({
    description:'Kijelentkezteti a felhasználót'
  })
  @ApiHeader({
    name:'authHeader',
    description:'Felhasználói token'
  })
  async (@Headers('authorization') authHeader: string){
    const token = authHeader.split(' ')[1];
        this.authService.logout(token)
  }
}
