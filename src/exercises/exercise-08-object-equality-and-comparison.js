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

  }
}



const a = new Student('Jasiek', 1);
const b = new Student('Jasiek', 1);

a.equals(b);



// const b = new Car();

// console.log(a === b);


// b.fullName = 'Krystyna Czubówna';

// delete b.frequency;
// b.someField = 'test';

console.log(a);
console.log(b);


function areStudentsEqual(students) {
  const a = students[0];
  const b = students[1];

  function isStudent(student) { return student instanceof Student; }

  if (students.filter(isStudent).length !== 2) {
    return false;
  }

  const aFields = Object.keys(a);
  const bFields = Object.keys(b);

  if (aFields.length !== bFields.length) {
    return false;
  }

  const equalFields = aFields.map(function (field, index) {
    console.log(`a has field ${field} of value ${a[field]}`);
    console.log(`b has field ${field} of value ${b[field]}`);
    console.log(a[field] === b[field]);
    return a[field] === b[field];
  });

  const equalValues = equalFields.filter(function (value) { return value; });

  return equalValues.length === aFields.length;

}


const result = areStudentsEqual([a, b]);

console.log(`Students a and b are${result ? ' ' : ' not '}equal`);



//
// const students = [
//   new Student('Alicja', 30),
//   new Student('Grzegorz', 5),
//   new Student('Rafał', 1),
//   new Student('Szymon H.', 60),
//   new Student('Szymon T.', 60),
// ];
//
// // Print names of all students and their number of beers
// // Calculate average number of beers possessed by any student.
//
// students.forEach(function(student) {
//   console.log(student.fullName, student.numberOfBoozeUnits);
// });
//
// const averageBeers = students.reduce(function(beers, student) {
//   console.log()
//   return beers.numberOfBoozeUnits + student.numberOfBoozeUnits;
// });
//
// console.log('On average, each student owns ' + averageBeers + ' Beers');