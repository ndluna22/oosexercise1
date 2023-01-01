//Part1

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  honk() {
    return "Beep.";
  }
  toString() {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
  }
}

//Part2

class Car extends Vehicle {
  //Car class inherits from Vehicle above
  constructor(make, model, year) {
    super(make, model, year); //calls constructor from parent. must call before referencing this.
    this.numWheels = 4; //adds more
  }
}

//Part3

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }

  revEngine() {
    return "VROOM!!!";
  }
}

//Part4

class Garage {
  constructor(capacity) {
    //contains capacity property
    this.vehicles = {}; //array will always empty
    this.capacity = capacity; //only this is provided
  }
  add(newVehicle) {
    if (newVehicle !== Vehicle) {
      return "Only vehicles are allowed in here!";
    }

    if (this.vehicles.length >= this.capacity) {
      return "Sorry, we're full.";
    }
    this.vehicles.push(newVehicle);
    return "Vehicle added!";
  }
}
