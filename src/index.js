// Task 1 

// So, knowing that 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 === 1.0 is `false`, 
//find out what can you do in order to compare these two values and obtain `true` result.


let a = 1
let b = 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 
let c = 0.1 * 10
let epsilon = Number.EPSILON

console.log(b); console.log(b === 1);

// SOLUTION 1

console.log(c * 10 / 10); console.log(c * 10 / 10 === 1);

// SOLUTION 2 

console.log(b - 1 < epsilon);