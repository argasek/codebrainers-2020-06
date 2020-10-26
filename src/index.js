// Draws number from 1..n
function drawNumber(n) {
  return Math.floor(Math.random() * n) + 1;
}


// TASK 1
  const range = 49;
  const outcome = [];

  for (let i = 0; i < 6; i++) {
    const result = drawNumber(range);
    outcome.push(result);
  }
  alert("Randomization results: " + outcome + ".");
