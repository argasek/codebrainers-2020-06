const arrayOne = [11, 22, 33, 7, 8];

const results = arrayOne.map(function(item) {
  return item % 2 === 0;
});

console.log(arrayOne);
console.log(results);
