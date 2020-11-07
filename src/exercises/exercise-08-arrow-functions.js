function sum(a, b) {
  return a + b;
}

const arrowSum = (a, b) => a + b;

function noParamFunction() {
  return 2013;
}

const arrowNoParamFunction = () => 2013;


function square(a) {
  return a * a;
}

const arrowSquare = a => a * a;

const squaredNumbers = [1, 2, 3, 4].map(arrowSquare);
const squaredNumbersAnonymous = [1, 2, 3, 4].map(x => x * x);