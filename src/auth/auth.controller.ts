import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  ParseIntPipe,
} from '@nestjs/common';

import {
  CreateCatDto,
  UpdateCatDto,
  ListAllEntities,
} from './dto/create-auth.dto';
import { CatsService } from './auth.service';
import { Cat } from './interface/auth.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post('postcat')
  async createCat(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get('getcats')
  async findAllCats(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Post('create')
  create(@Body() createCatDto: CreateCatDto) {
    if (!createCatDto.name) {
      // 抛出一个 HTTP 400 Bad Request 异常
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Name is required',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return { data: createCatDto, message: 'success', status: 201 };
  }

  @Get('list')
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all cats (limit: ${query.limit} items)`;
  }

  @Get('user/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat ${updateCatDto.age}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
