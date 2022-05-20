import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cat } from 'models/cat.model';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';

@Module({
  imports: [SequelizeModule.forFeature([Cat])],
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule {}
