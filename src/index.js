function takingInput() {
    let age = prompt('How old are you?');
    return age;
}

function checkingIsNaN(age) {
    age = Number(age);
    if (isNaN(age)) {
        return true;
    } else {
        return age;
    }
}

function parsingAge(age) {
    if (Number.isInteger(age)) {
        console.log(age);
        age = parseInt(age);
        return age;
    }
    else { 
        age = parseFloat(age);
        return age;
    }
}

function valueMessages(age) {
    if (age === 0) {
        return "Well, you aren't that young, are you?";
    }
    else if (age < 0) {
        return "Are you Benjamin Button or ... ?";
    }
    else if (age > 0) {
        if (age >= 140) {
            return "You are the oldest person in the world";
        }
        else {
            return "Your age is " + age;
        }
    }
}

function displayingAge () {
    let age = takingInput();
    age = checkingIsNaN(age);
    if (age === true) {
        alert("Wpisz liczbę!!");
        displayingAge()
    }
    else {
    age = parsingAge(age);
    const message = valueMessages(age);
    alert(message);
    }
}
displayingAge();

// 2nd Task
function takingInputToCountingAge() {
    const yearOfBorn = prompt('When were you born?');
    return yearOfBorn;
}
function calculatingAge(yearOfBorn) {
    const age = 2020 - yearOfBorn;
    return "You are " + age + " years old";
}

function calculateAndDisplayAge() {
const year = takingInputToCountingAge();
const age = calculatingAge(year);
alert(age);
}
// calculateAndDisplayAge()