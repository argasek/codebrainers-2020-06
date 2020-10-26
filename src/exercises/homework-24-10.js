function isRepeated (arrayOfNumbers, number) {
let repeated = false;
for(let i = 0; i < arrayOfNumbers.length; i++) {
if (arrayOfNumbers[i] === number) {
repeated = true;
}
}
return repeated
}


function generatingRandomArray(range, quantity) {
    if (quantity > range) {
        return "You can't play";
    }
    else {
        const randomArray = [];
        let i = 0;
        while (i < quantity) {
            const singleNumber =  Math.floor(Math.random() * range) + 1;
            if (!isRepeated(randomArray, singleNumber)) {
                randomArray.push(singleNumber);
                i++;
            }
        }
        return randomArray;
    }
}

const result = generatingRandomArray(49, 6);
console.log(result);