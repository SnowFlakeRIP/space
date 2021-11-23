import {Column, DataType, Model, Table} from "sequelize-typescript";
@Table({tableName:'companies'})
export class Company extends Model{
    @Column({type:DataType.INTEGER, autoIncrement:true,unique:true,primaryKey:true})
    id:number
    @Column({type:DataType.STRING,allowNull:false})
    company_name:string
}