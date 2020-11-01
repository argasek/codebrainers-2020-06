// const firstArray = [3, 8, 11, 14, 16, 22];
// const secondArray = [4, 9, 11, 14, 21, 23];

//TASK 1.

// first solution:

// function intersection(a, b) {
//     const arr1 = a.filter(function (item) {
//         return b.includes(item);
//     });
//     return arr1;
// }

// second solution:

// function intersection(a, b) {
//     const arr1 = a.filter(item => b.includes(item));
//     return arr1;
// }

// console.log(intersection(firstArray, secondArray));

// ------------------------------------------------------------

//TASK 2.

// first solution:

// const arr1 = [2, 4, 2];

// function quadraticEquation(a) {
//     if (a[1]*a[1] - 4*a[0]*a[2] > 0) {
//         console.log('delta > 0');
//     } else if (a[1]*a[1] - 4*a[0]*a[2] < 0) {
//         console.log('delta < 0');
//     } else {
//         console.log('delta = 0');
//     }
// }
//
// console.log(quadraticEquation(arr1));


// second solution:

alert("Mamy funkcję kwadratową (y = ax^2 + bx + c)");
alert("Aby obliczyć deltę wpisz kolejno liczby:");

let a = prompt('Wpisz liczbę A ','2');
let variableA = parseInt(a);

let b = prompt('Wpisz liczbę B ','4');
let variableB = parseInt(b);

let c = prompt('Wpisz liczbę C ','2');
let variableC = parseInt(c);


const firstArray = [];
const count = firstArray.push(variableA, variableB, variableC);

console.log(count);

const numerator = Math.sqrt(b*b- 4*a*c);
const denominator = 2*a;
const root1 = (-b+numerator)/denominator;
const root2 = (-b-numerator)/denominator;

console.log(root1);
console.log(root2);


function quadraticEquation(a) {
    if (a[1]*a[1] - 4*a[0]*a[2] > 0) {
        alert('funkcja posiada dwa miejsca zerowe: ' + root1 +" "+ root2 );
    } else if (a[1]*a[1] - 4*a[0]*a[2] < 0) {
        alert('funkcja nie posiada miejsca zerowego(*)');
    } else if (!(a[1]*a[1] - 4*a[0]*a[2])) {
        alert('funkcja posiada jedno miejsce zerowe: ' + root1);
    } else {
        alert('Błędnie podane wartości. Odśwież stronę i wpisz liczby.')
    }
}
console.log(quadraticEquation(firstArray));

