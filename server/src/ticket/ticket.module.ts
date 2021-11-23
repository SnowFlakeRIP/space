import { Module } from '@nestjs/common';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Ticket} from "./ticket.model";

@Module({
  controllers: [TicketController],
  providers: [TicketService],
  imports:[SequelizeModule.forFeature([Ticket])]
})
export class TicketModule {}
