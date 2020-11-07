class Car {
  constructor() {
    this.brand = 'Fiat Multipla';
    this.numberOfWheels = 4;
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
    return fullNameEqual && boozeEqual && frequencyEqual;
  }
}



const a = new Student('Jasiek', 1);
const b = new Student('Jasiek', 1);

console.log(a.equals(b));

