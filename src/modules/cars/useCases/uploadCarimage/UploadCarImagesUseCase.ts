import { inject, injectable } from "tsyringe";

import { ICarsImagesRepository } from "@modules/cars/repositories/ICarsImagesRepository";

import { deleteFile } from "@utils/file";

interface IRquest {
  car_id: string;
  images_name: string[];
}

@injectable()
class UploadCarImagesUseCase {
  constructor(
    @inject("CarsImagesRepository")
    private carsImagesRepository: ICarsImagesRepository
  ) {}

  async execute({ car_id, images_name }: IRquest): Promise<void> {
    const carsImages = await this.carsImagesRepository.findByCarId(car_id);

    if (carsImages) {
      carsImages.forEach(async (carimage) => await deleteFile(`./tmp/cars/${carimage.image_name}`));
    }

    images_name.map(async (image) => {
      await this.carsImagesRepository.create(car_id, image);
    });
  }
}

export { UploadCarImagesUseCase };