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

const numberOfQuestions = 4;

for (i = 0; i < numberOfQuestions; i++) {
  const result = askQuestion();
  if (result === true) {
    correctAnswersCount++;
  }
}

const incorrectAnswersCount = numberOfQuestions - correctAnswersCount;

const passedOrNot = correctAnswersCount === numberOfQuestions ? 'passed' : "didn't pass";

let message = '';

message += `Correct answers: ${correctAnswersCount}, `;
message += `incorrect answers: ${incorrectAnswersCount}. `;
message += `You ${passedOrNot} the test!`;

alert(message);

