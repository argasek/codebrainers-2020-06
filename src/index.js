let age = prompt('How old are you?');
let parsedAge = parseInt(age);
console.log(age, parsedAge);
if (isNaN(parsedAge)) {
    alert("Wpisz liczbę!! ");
} else {
    age = parsedAge + 13;
    alert("Your age is " + age);
}