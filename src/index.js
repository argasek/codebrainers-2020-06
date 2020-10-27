// Draws number from 1..n
function drawNumber(n) {
  return Math.floor(Math.random() * n) + 1;
}

function fillNumbersAvailable() {
  const numbersAvailable = [];
  for (let i = 1; i <= 49; i++) {
    numbersAvailable.push(i);
  }
  return numbersAvailable;
} 


const numbers = [22, 11, 14, 8, 3, 16];

function drawNumbers() {
  const numbersDrawn = [];
  while(numbersDrawn.length < 6) {
    const result = drawNumber(49);
    if (numbersDrawn.indexOf(result) === -1) {
      numbersDrawn.push(result);
    }
  }

  return numbersDrawn;
}

console.log(drawNumbers());