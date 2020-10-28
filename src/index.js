// Draws number from 0..n-1
function drawNumber(n) {
     return Math.floor(Math.random() * n);
}

function fillNumbersAvailable() {
  const numbersAvailable = [];
  for (let i = 1; i <= 49; i++) {
    numbersAvailable.push(i);
  }
  return numbersAvailable;
} 

const numbers = [22, 11, 14, 8, 3, 16];


function compare(a, b) {
  return a - b;
}



function drawNumbers() {
  const numbersDrawn = [];
  const numbersAvailable = fillNumbersAvailable();
  while(numbersDrawn.length < 6) {
      const index = drawNumber(49 - numbersDrawn.length);
      const removedNumbers = numbersAvailable.splice(index, 1);
      const result = removedNumbers[0];
      numbersDrawn.push(result);
  }

  return numbersDrawn.sort(compare);
}


console.log(drawNumbers());

// console.log(fillNumbersAvailable());

//array.splice(start, deleteCount[, item1[, item2[, ...]]])