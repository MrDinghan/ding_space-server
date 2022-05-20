import {
  Column,
  PrimaryKey,
  AllowNull,
  Model,
  Table,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({
  modelName: 'cats',
  timestamps: true,
  createdAt: 'create_date',
  updatedAt: 'update_date',
})
export class Cat extends Model {
  @AllowNull(false)
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Column
  age: number;
}

export type IModel = {
  id: number;
  age: number;
  name: string;
};
export type ICreate = Omit<IModel, 'id'>;

export type IUpdate = { id: number; data: Omit<IModel, 'id'> };
