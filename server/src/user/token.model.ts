import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "./user.model";

@Table({tableName: 'user_refresh_token'})
export class Token extends Model {
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true})
    id: number

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    user_id: number

    @BelongsTo(() => User)
    user: User[]
}