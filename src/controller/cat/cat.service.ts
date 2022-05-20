import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { Cat, ICreate, IUpdate } from 'models/cat.model';

@Injectable()
export class CatService {
  constructor(
    @InjectModel(Cat)
    private catModel: typeof Cat,
  ) {}

  async findAll(): Promise<Cat[]> {
    return this.catModel.findAll({
      where: {
        [Op.or]: [
          {
            name: {
              [Op.like]: 't%',
            },
          },
          {
            name: {
              [Op.like]: 'f%',
            },
          },
        ],
      },
    });
  }

  async create(param: ICreate) {
    return this.catModel.create(param);
  }

  async findOne(id: number) {
    return this.catModel.findOne({
      where: {
        id,
      },
    });
  }

  async update({ id, data }: IUpdate) {
    return this.catModel.update(data, {
      where: { id },
    });
  }

  async remove(id: number): Promise<void> {
    await this.catModel.destroy({
      where: {
        id,
      },
    });
  }
}
