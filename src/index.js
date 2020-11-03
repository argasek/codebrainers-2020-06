const points = [[5, 8, 1], [10, 20, 1]];
const a = points[0];
const b = points[1];
const x = b[0] - a[0]
const y = b[1] - a[1]
const z = b[2] - a[2]

const avg = [a.reduce(function(acc, item, index, arr) {
  return acc + item;
})];


// (x1, y1) (x2, y2)
// c^2 = a ^2 + b^2
// c = sqrt(a^2 + b^2)
// c = sqrt((x2 - x1)^2 + (y2 - y1)^2 + )

const lengthLine = points.reduce(function(acc, item, index, array){
  console.log(`Acc: ${acc}`);
  console.log(`item: ${item}`);
  const x = (acc[0]-item[0]) * (acc[0]-item[0]);
  const y = (acc[1]-item[1]) * (acc[1]-item[1]);
  const z = (acc[2]-item[2]) * (acc[2]-item[2]);
  const sum = x + y + z;
  return Math.sqrt(sum);
});
console.log(lengthLine);

console.log(Math.sqrt(x*x + y*y + z*z));
