function isRepeated (arrayOfNumbers, number) {
let repeated = false;
for(let i = 0; i < arrayOfNumbers.length; i++) {
if (arrayOfNumbers[i] === number) {
repeated = true;
}
}
return repeated;
}


function comparingTwoArrays (firstArray, secondArray) {
if (firstArray.length === secondArray.length) {
    let sameElements = [];
    for(let i = 0; i < firstArray.length; i++){
     const repeat = isRepeated(secondArray, firstArray[i]);
     const repeatInSameElements = isRepeated(sameElements, firstArray[i]);
     if (repeat && !repeatInSameElements) {
         sameElements.push(firstArray[i]);
    }
}
    let message = "";
    message += `There are ${sameElements.length} elements `;
    message += "which are the same and appear in both arrays.";
    return message;
}
else {
    const longerArray =  firstArray > secondArray ? "First" : "Second";
    return `They don't have equal number of elements. ${longerArray} is longer.`;
}
}
const a = [15, 22, 7, 49, 3, 2];
const b = [15, 7, 22, 18, 38, 2];
console.log(comparingTwoArrays(a,b));














// function generatingRandomArray(range, quantity) {
//     if (quantity > range) {
//         return "You can't play";
//     }
//     else {
//         const randomArray = [];
//         let i = 0;
//         while (i < quantity) {
//             const singleNumber =  Math.floor(Math.random() * range) + 1;
//             if (!isRepeated(randomArray, singleNumber)) {
//                 randomArray.push(singleNumber);
//                 i++;
//             }
//         }
//         return randomArray;
//     }
// }

// const result = generatingRandomArray(49, 6);
// console.log(result);