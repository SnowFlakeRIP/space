import {Column, DataType, HasOne, Model, Table} from "sequelize-typescript";
import {Token} from "./token.model";
import {Bio} from "../bio/bio.model";
import {Ticket} from "../ticket/ticket.model";

@Table({tableName: 'users', createdAt: false, updatedAt: false})
export class User extends Model {
    @Column({type: DataType.INTEGER, autoIncrement: true, primaryKey: true, unique: true})
    id: number

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string

    @Column({type: DataType.STRING})
    password: string

    @HasOne(() => Token)
    token: Token[]

    @HasOne(() => Bio)
    bio: Bio[]

    @HasOne(() => Ticket)
    ticket: Ticket[]
}