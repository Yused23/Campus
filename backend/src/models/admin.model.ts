import {
    Table,
    Model,
    Column,
    DataType,
    CreatedAt,
    UpdatedAt,
} from 'sequelize-typescript';


import { AdminAttributes, AdminCreationAttributes } from "../interfaces/admin.interface";

@Table({
    timestamps: true,
    tableName: "admins",
    modelName: "Admin"
})

export default class Admin extends Model<AdminAttributes, AdminCreationAttributes> {
    @Column({
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
    })
    declare id: string;

    @Column({
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
    })
    declare userId: string;

    @CreatedAt
    declare created_at: Date;

    @UpdatedAt
    declare updated_at: Date;
}