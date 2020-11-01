const a = [33, 5, 7, 1, 2];
// const b = [];

// function showElementOnConsole(item, index, arr) {
//     console.log(item, index);
// }
//
// a.forEach(showElementOnConsole);

//funkcja anonimowa:

a.forEach(function (item, index, arr) {
    console.log(item, index);
});

// for (let i=0; i<a.length; i++) {
//     const x = a[i];
//     b.push(x*x);
// }
// console.log(a);
// console.log(b);