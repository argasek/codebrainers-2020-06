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
  const result = [x * y, parsedAnswer]
  return result;
}

let correctAnswersCount = 0;
let i;

const numberOfQuestions = 3;

const questionsAndAnswers = [];
for (i = 0; i < numberOfQuestions; i++) {
  const result = askQuestion();
  if (result[0] === result[1]) {
    correctAnswersCount++;
  }
  questionsAndAnswers.push(result);
}


const incorrectAnswersCount = numberOfQuestions - correctAnswersCount;

const passedOrNot = correctAnswersCount === numberOfQuestions ? 'passed' : "didn't pass";

let message = '';

message += `Correct answers: ${correctAnswersCount}, `;
message += `incorrect answers: ${incorrectAnswersCount}. `;
message += `You ${passedOrNot} the test!`;
message += "\n";
for(i=0; i < questionsAndAnswers.length; i++) {
  const correctAnswer = questionsAndAnswers[i][0];
  const answer = questionsAndAnswers[i][1];
  message += `Correct answer: ${correctAnswer}, `; 
  message += `your answer ${answer} `;
  message += correctAnswer===answer ? "Correct" : "Incorrect"
  message += "\n";
}
console.log(questionsAndAnswers);
alert(message);

