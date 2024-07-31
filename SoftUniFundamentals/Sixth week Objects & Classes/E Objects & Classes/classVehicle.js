function classVehicle() {
  class Vehicle {
    constructor(type, model, parts, fuel) {
      this.type = type;
      this.model = model;
      this.fuel = fuel;

      parts.quality = parts.engine * parts.power;
      this.parts = parts;
    }
    drive(fuelLoss) {
      this.fuel -= fuelLoss;
    }
  }
  let parts = { engine: 6, power: 100 };
  let vehicle = new Vehicle("a", "b", parts, 200);
  vehicle.drive(100);
  console.log(vehicle.fuel);
  console.log(vehicle.parts.quality);

  let parts2 = { engine: 9, power: 500 };
  let vehicle2 = new Vehicle("l", "k", parts2, 840);
  vehicle2.drive(20);
  console.log(vehicle2.fuel);
}
classVehicle();
