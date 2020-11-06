class Student {
  constructor(fullName, numberOfBoozeUnits = 0) {
    this.fullName = fullName;
    this.numberOfBoozeUnits = numberOfBoozeUnits;
  }

}

const students = [
  new Student('Alicja', 30),
  new Student('Grzegorz', 5),
  new Student('Rafał', 1),
  new Student('Szymon H.', 60),
  new Student('Szymon T.', 60),
];

// Print names of all students and their number of beers
// Calculate average number of beers possessed by any student.

students.forEach(function(student) {
  console.log(student.fullName, student.numberOfBoozeUnits);
});

const averageBeers = students.reduce(function(beers, student) {
    return beers + student.numberOfBoozeUnits;
}, 0);

console.log('On average, each student owns ' + (averageBeers/students.length) + ' Beers');