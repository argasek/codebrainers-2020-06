export default class Student {

  constructor(fullName, numberOfBoozeUnits = 0) {
    this.fullName = fullName;
    this.numberOfBoozeUnits = numberOfBoozeUnits;
    this.frequency = 0;
  }
}