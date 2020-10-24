// Draws number from 1..n
function drawNumber(n) {
  return Math.floor(Math.random() * n) + 1;
}

function askQuestion() {
  const range = 10;
  const x = drawNumber(range);
  const y = drawNumber(range);
  console.log(x, y);
  const answer = prompt("How much is " + x + " * " + y + " ?");
  const parsedAnswer = parseFloat(answer);
  return x * y === parsedAnswer;
}

let correctAnswersCount = 0;
let i;

const numberOfQuestions = 5;

for (i = 0; i < numberOfQuestions; i++) {
  const result = askQuestion();
  if (result === true) {
    correctAnswersCount++;
  }
}

const incorrectAnswersCount = numberOfQuestions - correctAnswersCount;

alert(`Number of correct answers: ${correctAnswersCount}, Number of incorrect answers: ${incorrectAnswersCount}`)
if (correctAnswersCount===numberOfQuestions){
    alert ("You passed the test");
}

console.log(i);
console.log(correctAnswersCount);

// for (let i = 0; i < 100; i++) {
//   const a = Math.random() * 10;
//   console.log(Math.floor(a) + 1);
// }
