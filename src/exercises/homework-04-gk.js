function compare(a, b) {
  return a - b;
}

const numbers1 = [22, 11, 14, 8, 3, 16];
const numbers2 = [17, 22, 20, 8, 3, 21];

const sorted1 = numbers1.sort(compare);
const sorted2 = numbers2.sort(compare);


function checkedNumbers() {
    const result= [];
    while (result.length < 6) {
        if (sorted1[0] > sorted2[0]) {
            sorted2.splice(0,1);
        }
        if (sorted1[0] < sorted2[0]) {
            sorted1.splice(0,1);
        }
        else {
            result.push(sorted1[0]);
            sorted1.splice(0,1);
            sorted2.splice(0,1);
        }
    }
    return result;
}



console.log(checkedNumbers());