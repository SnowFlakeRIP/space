import {Module} from '@nestjs/common';
import {UserController} from './user.controller';
import {UserService} from './user.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./user.model";
import {JwtModule} from "@nestjs/jwt";
import {Token} from "./token.model";

@Module({
    controllers: [UserController],
    providers: [UserService],
    imports: [SequelizeModule.forFeature([User,Token]),
        JwtModule.register({
            secret: process.env.PRIVATE_KEY || 'SECRET',
            signOptions: {
                expiresIn: '15min'
            }
        })]
})
export class UserModule {
}
