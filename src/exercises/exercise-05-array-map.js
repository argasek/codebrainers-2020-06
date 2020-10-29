// Map the following array to this one: [false, true, false, false, true];
const arrayOne = [11, 22, 33, 7, 8];

const results = arrayOne.map(function(item) {
  return !(item % 2);
});

console.log(arrayOne);
console.log(results);
