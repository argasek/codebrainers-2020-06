// Draws number from 1..n
function drawNumber(n) {
  return Math.floor((Math.random() * n)) + 1;
}


for (let i = 0; i < 100; i++) {
  const a = Math.random() * 10;
  console.log(Math.floor(a) + 1);
}
