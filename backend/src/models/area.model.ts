
import {
    Table,
    Model,
    Column,
    DataType,
} from 'sequelize-typescript';



import { AreaAttributes, AreaCreationAttributes } from "../interfaces/area.interface";

@Table({
    timestamps: true,
    tableName: "areas",
    modelName: "Area"
})

export default class area extends Model<AreaAttributes, AreaCreationAttributes> {
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