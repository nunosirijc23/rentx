import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let carsRepositoryInMemory: CarsRepositoryInMemory;
let listAvailableCarsUseCase: ListAvailableCarsUseCase;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory);
  });

  it("should be able to list  all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car1",
      description: "Car description",
      daily_rate: 110.00,
      license_plate: "DEF-1234",
      fine_amount: 40,
      brand: "Car_brand",
      category_id: "category_id"
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all cars available by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car2",
      description: "Car description",
      daily_rate: 110.00,
      license_plate: "DEF-12345",
      fine_amount: 40,
      brand: "Car_brand_test",
      category_id: "category_id"
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Car_brand_test",
    });
    
    expect(cars).toEqual([car]);
  });

  it("should be able to list all cars available by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car3",
      description: "Car description",
      daily_rate: 110.00,
      license_plate: "DEF-12346",
      fine_amount: 40,
      brand: "Car_brand_test",
      category_id: "category_id"
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "Car3",
    });
    
    expect(cars).toEqual([car]);
  });

  it("should be able to list all cars available by category id", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car4",
      description: "Car description",
      daily_rate: 110.00,
      license_plate: "DEF-12347",
      fine_amount: 40,
      brand: "Car_brand_test",
      category_id: "1234"
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "1234",
    });
    
    expect(cars).toEqual([car]);
  });
});