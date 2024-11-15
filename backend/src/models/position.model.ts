
import {
    Table,
    Model,
    Column,
    DataType,
} from 'sequelize-typescript';


import { PositionAttributes, PositionCreationAttributes } from "../interfaces/position.interface";

@Table({
    timestamps: true,
    tableName: "positions",
    modelName: "Position"
})

export default class Position extends Model<PositionAttributes, PositionCreationAttributes>{
    @Column({
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
    })
    declare id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare name: string;

}