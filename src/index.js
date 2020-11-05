class Student {
  constructor(fullName, numberOfBoozeUnits = 0) {
    this.fullName = fullName;
    this.numberOfBoozeUnits = numberOfBoozeUnits;
  }

}

const students = [
  new Student('Alicja'),
  new Student('Grzegorz'),
  new Student('Rafał', 1),
  new Student('Szymon H.'),
  new Student('Szymon T.'),
];

// Print names of all students and their number of beers
// Calculate average number of beers possessed by any student.