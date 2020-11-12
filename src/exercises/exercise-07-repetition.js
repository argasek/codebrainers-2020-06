// class Student {
//     constructor(fullName, numberOfBeers = 0) {
//         this.fullName = fullName;
//         this.numberOfBeers = numberOfBeers;
//     }
// }
//
// const students = [
//     new Student('Alicja', 30),
//     new Student('Grzegorz', 5),
//     new Student('Rafał', 1),
//     new Student('Szymon H.', 60),
//     new Student('Szymon T.', 60),
// ];
//
// // Print names of all students and their number of beers
// // Calculate average of beers possessed by any student.
//
// students.forEach(function (student) {
//     console.log(student.fullName, student.numberOfBeers);
// });
//
// const averageBeers = students.reduce(function (beers, student) {
//     return beers + student.numberOfBeers;
// }, 0) / students.length;
//
// console.log("On average, each student owns " + averageBeers + ' Beers');

// TASK 2. comparing

// class Student {
//     constructor(name, number) {
//         this.name = name;
//         this.number = number;
//     }
// }
//
// const studentA = new Student('Anonymous', 0);
// const studentB = new Student('Anonymous', 0);
// // const studentB = studentA;
//
// function compareTwoInstances(first, second) {
//     const firstInstanceOfclass = first instanceof Student;
//     const secondInstanceOfclass = second instanceof Student;
//     const nameComparing = first.name === second.name;
//     const numberComparing = first.number === second.number;
//     return firstInstanceOfclass && secondInstanceOfclass && nameComparing && numberComparing;
// }
//
// console.log(compareTwoInstances(studentA, studentB));

// second solution:

// console.log(JSON.stringify(studentA) === JSON.stringify(studentB));

// third solution:

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

// const b = new Car();
//
// console.log(a === b);
//
//
// b.fullName = 'Krystyna Czubówna';
//
// delete b.frequency;
// b.someField = 'test';

// console.log(a);
// console.log(b);
//
//
// function areStudentsEqual(students) {
//   const a = students[0];
//   const b = students[1];
//
//   function isStudent(student) { return student instanceof Student; }
//
//   if (students.filter(isStudent).length !== 2) {
//     return false;
//   }
//
//   const aFields = Object.keys(a);
//   const bFields = Object.keys(b);
//
//   if (aFields.length !== bFields.length) {
//     return false;
//   }
//
//   const equalFields = aFields.map(function (field, index) {
//     console.log(`a has field ${field} of value ${a[field]}`);
//     console.log(`b has field ${field} of value ${b[field]}`);
//     console.log(a[field] === b[field]);
//     return a[field] === b[field];
//   });
//
//   const equalValues = equalFields.filter(function (value) { return value; });
//
//   return equalValues.length === aFields.length;
//
// }
//
//
// const result = areStudentsEqual([a, b]);
//
// console.log(`Students a and b are${result ? ' ' : ' not '}equal`);