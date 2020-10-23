let currentYear = prompt('Hello, could you tell me what year is now?');
let userYear = prompt('In this step tell me what year you were born')
let intCurrentYear = parseInt(currentYear);
let intUserYear = parseInt(userYear)
let userAge = intCurrentYear - intUserYear

switch (true) {
    case isNaN(intCurrentYear):
        alert('Please, give me a number');
        break;
    case isNaN(intUserYear):
        alert('Please, give me a number');
        break;
    default:
        alert('You are ' + userAge + ' years old')
}