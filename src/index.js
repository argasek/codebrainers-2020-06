// TASK 1

let age = prompt('How old are you?');

/*  - changed parseInt to parseFloat 
    - parseInt would immidiately change our number into integer
    - we left the possibility of input number being float
*/
let inputAge = parseFloat(age)

console.log("Age = " + inputAge);

if (isNaN(inputAge)) {
    alert("Type in a number!");
    // both 0 and negative numbers included
} else if (inputAge <= 0) {
    alert("You are probably a bit older.");
} else if (inputAge >= 140) {
    alert("You are probably a bit younger.")
} else if (Number.isInteger(inputAge) === false) {
    alert("Whole age was expected.")
} else {
    /* +13 added to final result as it was made during last class */
    inputAge = inputAge + 13;
    alert("Your age after adding 13 is " + inputAge + ".");
}


