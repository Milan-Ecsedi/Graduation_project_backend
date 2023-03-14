import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';
import { UserModule } from './user/user.module';
import { AppliedUserModule } from './applied_user/applied_user.module';
import User from './user/entities/user.entity';
import Course from './course/entities/course.entity';
import AppliedUser from './applied_user/entities/applied_user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_DATABASE || 'database',
      entities: [User, Course, AppliedUser],
      synchronize: true,
    }),
    CourseModule,
    UserModule,
    AppliedUserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
