// TASK 1.

// const a = 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1;
// console.log(a, a===1);

// first sample:
// let b;
// b = Math.round((a*10)/10);
// console.log(b, b===1);


// second sample:
// let c;
// c = a;
// c = c.toFixed(0)
// console.log(c, c===1);

// third sample:
//
// Number.prototype.round = function(item) {
//     return +(Math.round(this+"e+"+item) + "e-"+item);
// }
// let x = 1.005
// x = x.round(2);
// console.log(x, x===1.01);

// fourth sample:
// let d=a;
// d = d.toPrecision(1);
// console.log(d, d===1);
//
// console.log(Math.ceil(a), Math.ceil(a)===1);


// TASK 2.:

const firstArray = [1,2,2,5,1,22,22,3,2,1,5,7,9];
function numberSelect(arr) {
    arr.sort(function (a, b) {
        return a-b;
    });
    return arr.reduce(function(a, b) {
        if (a[b] === a[b+1]) {
            a.push(b);
            arr.splice(a[b+1]);
        } else if (a[b] < a[b+1]) {
            a.push(b+1);
        }
        return a;
    }, []);
    // return arr.reduce(function(a,b) {
    //     a[b] = (a[b] || 0) +1;
    //     return a;
    // }, {});
}

console.log(numberSelect(firstArray));






