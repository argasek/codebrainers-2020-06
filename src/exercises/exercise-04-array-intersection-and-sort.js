// const ArrayOfStrings= ["Kros", "mrok", "Mikro", "alf", "AAAAA", "aAAAaaa", "ZZZZZ", "bFDFDF"];
// const newArray = ArrayOfStrings.sort();
// console.log(newArray); // alphabetically capital letters, alphabetically lowercase letters

function SameDrawnNumbers (firstArray, secondArray) {
    const finalArray = [];
    while (firstArray.length && secondArray.length) {
        if (firstArray[0] === secondArray[0]){
            finalArray.push(firstArray[0]);
            firstArray.splice(0,1);
            secondArray.splice(0,1);
        }
        else if (firstArray[0] > secondArray[0]) {
            secondArray.splice(0,1);
        }
        else if (secondArray[0] > firstArray[0]) {
            firstArray.splice(0,1);
        }
    }
    return finalArray;
}
const firstExampleArray = [3, 8, 11, 14, 16, 22];
const secondExampleArray = [3, 8, 17, 20, 21, 22];
console.log(SameDrawnNumbers(firstExampleArray, secondExampleArray));