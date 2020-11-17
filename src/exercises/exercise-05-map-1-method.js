const a = [5, 7, 1, 2, 33];
// const b = [];
//
// for (let index=0; index<a.length; index++) {
//     const item = a[index];
//     b[index] = item * item;
// }
//
// console.log(a, b);

const b = a.map(function (item) {
    return item * item;
});

console.log(a, b);