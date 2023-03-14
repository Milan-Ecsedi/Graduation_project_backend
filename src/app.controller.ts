import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Render,
} from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,

    private dataSource: DataSource,
  ) {}

  @Get()
  @Render('index')
  index() {
    return {};
  }
}
