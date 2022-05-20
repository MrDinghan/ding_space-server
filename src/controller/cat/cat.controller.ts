import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { CatService } from './cat.service';
import { ICreate, IUpdate } from 'models/cat.model';

@Controller('cat')
export class CatController {
  constructor(private catService: CatService) {}

  @Get()
  async findAll() {
    return this.catService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.catService.findOne(id);
  }

  @Post('add')
  async create(@Body() param: ICreate) {
    return this.catService.create(param);
  }

  @Post('update')
  async update(@Body() param: IUpdate) {
    return this.catService.update(param);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.catService.remove(id);
  }
}
