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