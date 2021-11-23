import {Module} from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {SequelizeModule} from "@nestjs/sequelize";
import {UserModule} from './user/user.module';
import {User} from "./user/user.model";
import {Token} from "./user/token.model";
import {BioModule} from './bio/bio.module';
import {Bio} from "./bio/bio.model";
import {TicketModule} from './ticket/ticket.module';
import {Ticket} from "./ticket/ticket.model";
import { CompanyModule } from './company/company.module';


@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env'
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Token, Bio, Ticket],
            autoLoadModels: true
        }),
        UserModule,
        BioModule,
        TicketModule,
        CompanyModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
