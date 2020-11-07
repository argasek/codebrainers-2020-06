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
const initialValue = 0;
const averageBeers = students.reduce(function(acc, currentValue) {
  return acc + currentValue.numberOfBoozeUnits
}, initialValue) / students.length;

console.log('On average, each student owns ' + averageBeers + ' Beers');
const studentA = new Student('Anonymous', 0);
const studentB = new Student('Anonymous', 0);

// Manually
function comapringTwoInstances(first, second) {
  const isFirstInstanceOfclass = first instanceof Student;
  const isSecondInstanceOfclass = second instanceof Student;
  const nameEquality = first.fullName === second.fullName; 
  const BoozeEquality = first.numberOfBoozeUnits === second.numberOfBoozeUnits;
  return isFirstInstanceOfclass && isSecondInstanceOfclass && nameEquality && BoozeEquality
}
console.log(comapringTwoInstances(studentA, studentB));
//Stringify
console.log(JSON.stringify(studentB) === JSON.stringify(studentA));


