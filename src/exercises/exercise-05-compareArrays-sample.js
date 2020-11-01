// let a = [3, 4 ,5];
// console.log(a);

// let b = [];
// for (let i=0; i < a.length; i++) {
//     b.push(a[i]);
// }
//
// a[0] = 'test';
// b[0] = 'coś innego';

let a = [1, 2, [3, 4], 5];
let b = [];
for (let i=0; i < a.length; i++) {
    b.push(a[i]);
}

a[2][0]= 11;

function compareArrays(x, y) {
    if (!x || !y) {
        return false;
    }
    if (x.length !== y.length) {
        return false;
    }
    for (let i=0; i<x.length; i++) {
        if (x[i] !== y[i]) {
            compareArrays(x[i], y[i]);
            return false;
        }
    }
    return true;
}

console.log(a, b);
console.log('a === b ', a === b);
console.log('compareArrays(a, b) ', compareArrays(a, b));
