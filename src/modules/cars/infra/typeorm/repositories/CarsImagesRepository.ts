import { getRepository, Repository } from "typeorm";

import { ICarsImagesRepository } from "@modules/cars/repositories/ICarsImagesRepository";

import { CarImages } from "../entities/CarImages";

class CarsImagesRepository implements ICarsImagesRepository {
  private repository: Repository<CarImages>;

  constructor() {
    this.repository = getRepository(CarImages);
  }

  async create(car_id: string, image_name: string): Promise<CarImages> {
    const carImage = this.repository.create({
      car_id,
      image_name
    });

    await this.repository.save(carImage);

    return carImage;
  }

  async findByCarId(car_id: string): Promise<CarImages[]> {
    const carImages = await this.repository.find({ car_id });

    return carImages;
  }

}

export { CarsImagesRepository };