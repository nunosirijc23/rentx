import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../ISpecificationsRepository";


class SpecificationsRepositoryInMemory implements ISpecificationsRepository {
  specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  async create({ name, description }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date()
    });

    this.specifications.push(specification);

    return specification;
  }

  async findByName(name: string): Promise<Specification> {
    return this.specifications.find((specification) => specification.name === name);
  }

  async findbyIds(ids: string[]): Promise<Specification[]> {
    const allSpecifications  = this.specifications.filter((specification) => 
      ids.includes(specification.id)
    );

    return allSpecifications;
  }

}

export { SpecificationsRepositoryInMemory };