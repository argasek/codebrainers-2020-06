export default class Student {

  constructor(fullName, numberOfBoozeUnits = 0) {
    this.fullName = fullName;
    this.numberOfBoozeUnits = numberOfBoozeUnits;
    this.frequency = 0;
  }

  clone() {
    const student = new Student();

    student.fullName = this.fullName;
    student.numberOfBoozeUnits = this.numberOfBoozeUnits;
    student.frequency = this.frequency;

    return student;
  }
}