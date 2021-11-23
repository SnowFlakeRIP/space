import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../user/user.model";

@Table({tableName: 'bio'})
export class Bio extends Model {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number
    @Column({type: DataType.STRING, allowNull: true})
    user_name: string
    @Column({type: DataType.STRING, allowNull: true})
    user_surname: string
    @Column({type: DataType.STRING, allowNull: true})
    user_patronymic: string

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    user_id: number

    @BelongsTo(() => User)
    user: User[]
}