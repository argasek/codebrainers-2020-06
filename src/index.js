// TASK 1

let age = prompt('How old are you?');

/*  - changed parseInt to parseFloat 
    - parseInt would immidiately change our number into integer
    - we left the possibility of input number being float
*/
let inputAge = parseFloat(age);

console.log("Age = " + inputAge);

if (isNaN(inputAge)) {
    alert("Type in a number!");
    // both 0 and negative numbers included
} else if (inputAge <= 0) {
    alert("You are probably a bit older.");
} else if (inputAge >= 140) {
    alert("You are probably a bit younger.");
} else if (Number.isInteger(inputAge) === false) {
    alert("Whole age was expected.");
} else {
    /* +13 added to final result as it was made during last class */
    inputAge = inputAge + 13;
    alert("Your age after adding 13 is " + inputAge + ".");
}


// TASK 2

// Current year:
let currentYear = prompt("What year is this?")
let parsedCurrentYear = parseFloat(currentYear);

if (isNaN(parsedCurrentYear)) {
    alert("This isn't a correct year format.");
} else if (parsedCurrentYear !== 2020) {
    // I assume only real current year is correct - 2020
    alert("This isn't a correct current year.");
} else {
    
    // Birth year:
    let bornYear = prompt("What year were you born in?")
    let parsedBornYear = parseFloat(bornYear);
    
    if (isNaN(parsedBornYear)) {
        alert("This isn't a correct year format.");
    } else if (parsedBornYear < 1900) {
        alert("You were probably born later...");
    } else if (parsedBornYear >= 2020) {
        alert("You were probably born earlier...");
    } else if (Number.isInteger(parsedBornYear) === false) {
        alert("This isn't a correct year format.");
    } else {

        // Person's age:
        let personsAge = parsedCurrentYear - parsedBornYear;
        alert("I calculate that your age is " + personsAge + ".");
    }        
}
