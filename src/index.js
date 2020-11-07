class Car {
  constructor() {
    this.brand = 'Fiat Multipla';
    this.numberOfWheels = 4;
  }
  equals(car) {
    const carPropertiesEqual = this.brand === car.brand && this.numberOfWheels === car.numberOfWheels;
    return carPropertiesEqual;
  }
}

class Student {
  constructor(fullName, numberOfBoozeUnits = 0) {
    this.fullName = fullName;
    this.numberOfBoozeUnits = numberOfBoozeUnits;
    this.frequency = 0;
    this.car = new Car();
  }

  equals(student) {
    const fullNameEqual = this.fullName === student.fullName;
    const boozeEqual = this.numberOfBoozeUnits === student.numberOfBoozeUnits;
    const frequencyEqual = this.frequency === student.frequency;
    const carEqual = this.car.equals(student.car);
    return fullNameEqual && boozeEqual && frequencyEqual && carEqual;
  }
}

class TV {

}
const a = new Student('Jasiek', 1);
const b = new Student('Jasiek', 1);
b.car.brand = 'BMW';
b.tv = new TV();
b.tv.diagonal = 55;

console.log(a);
console.log(b);

console.log(a.equals(b));

