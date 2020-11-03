const a = [10, 666, 17, 5.5, 2];

console.log(a);

const sum = a.reduce(function(acc, item, index, arr) {
  console.log('acc + item = ', `${acc} + ${item} = ${acc + item}`);
  return acc + item;
}, 10000);

console.log(sum, 10 + 666 + 17 + 5.5 + 2);



