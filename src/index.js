// Draws number from 1..n
function drawNumber(n) {
  return Math.floor((Math.random() * n)) + 1;
}

function askQuestion() {
    const range = 10;
    let x = drawNumber(range);
    let y = drawNumber(range);
    console.log(x, y);
    prompt("How much is " + x + " * " + y + " ?" );

}
for (let i = 0; i < 5; i++) {
  askQuestion();
}

// for (let i = 0; i < 100; i++) {
//   const a = Math.random() * 10;
//   console.log(Math.floor(a) + 1);
// }
