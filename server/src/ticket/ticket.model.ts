import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../user/user.model";

@Table({tableName: 'tickets'})
export class Ticket extends Model {
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true})
    id: number
    @Column({type: DataType.INTEGER})
    tickets_summary: number

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    user_id: number

    @BelongsTo(() => User)
    user: User[]
}