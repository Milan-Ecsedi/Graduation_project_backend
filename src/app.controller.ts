import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Render,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { getRepositoryToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import User from './user/entities/user.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,

    private dataSource: DataSource,
  ) {}
}
