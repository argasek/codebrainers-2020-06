// Reduce:
// Takes some array and REDUCES it to just _one_ value based on elements in the array

function unique(values) {
  return values.reduce(function (accumulator, value) {
    if (accumulator.indexOf(value) === -1) {
      accumulator.push(value);
    }

    return accumulator;
  }, []);
}

function uniqueViaFilter(values) {
  return values.filter(function (value, i, arr) {
    return arr.indexOf(value) === i;
  });
}

function uniqueViaSort(values) {
  let previousValue;
  return values.sort().reduce(function (accumulator, value) {
    if (value !== previousValue) accumulator.push(value);
    previousValue = value;
    return accumulator;
  }, []);
}


const sumAllNumbersInArrayWithInitialValue = (accumulator, value) => {
  console.log(`Previous: ${accumulator}, value: ${value}`);
  return accumulator + value;
};

const result = [ 13, 7, 4, 5, 16 ].reduce(sumAllNumbersInArray, -500);

console.log(result);

const sumAllNumbersInArray = (accumulator, value, index, arr) => {
  console.log(`Previous: ${accumulator}, value: ${value}`);
  return accumulator + value;
};

const result2 = [ 13, 7, 4, 5, 16 ].reduce(sumAllNumbersInArray);

console.log(result2);