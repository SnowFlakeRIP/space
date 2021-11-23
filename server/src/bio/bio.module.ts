import { Module } from '@nestjs/common';
import { BioController } from './bio.controller';
import { BioService } from './bio.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Bio} from "./bio.model";

@Module({
  controllers: [BioController],
  providers: [BioService],
  imports:[SequelizeModule.forFeature([Bio])]
})
export class BioModule {}
