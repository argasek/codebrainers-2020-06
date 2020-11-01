// Map the following array to this one: [false, true, false, false, true]
const a = [11, 22, 33, 7, 8];

const b = a.map(function (item){
    // return item % 2 === 0;
    // return !(item % 2);
    // return item % 2;
    // return (item % 2 - 1) * -1 === 0;
    return !!((item % 2 - 1) * -1);
});

console.log(a);
console.log(b);