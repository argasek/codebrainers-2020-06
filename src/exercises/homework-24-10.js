function generatingRandomArray(range, quantity) {
    const randomArray = [];
    for (let i = 0; i < quantity; i++) {
    const singleNumber =  Math.floor(Math.random() * range) + 1;
    randomArray.push(singleNumber);
    }
    return randomArray;
  }
const result = generatingRandomArray(49, 6);
console.log(result)