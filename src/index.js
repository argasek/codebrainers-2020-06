let age = prompt('How old are you?');
let parsedAge = parseInt(age);
console.log(age, parsedAge);
if (isNaN(parsedAge)) {
    alert("Wpisz liczbę!! ");
} else if (age == 0) {
    alert("Are You Serious? ");
} else if (age < 0, age >= 140) {
    alert(age + "?? " + " I don't think so...");
}
// else if (parseFloat(age)) {
//     alert("You are too precise. Please enter integer number")
// }
else {
    age = parsedAge;
    alert("Your age is " + age);
}
