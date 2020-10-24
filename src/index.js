let age = prompt('Proszę podaj ile masz lat');
let parsedAge = parseInt(age);
let parsedFloat = parseFloat(age);
// let isFloat = !Number.isSafeInteger(parsedFloat);

switch (true) {
case isNaN(parsedAge):
alert('Podaj liczbę');
break;
case parsedAge === 0:
alert('Nie jesteś aż tak młody');
break;
case parsedAge < 0:
alert('Bez przesady...');
break
// case isFloat:
// alert('Tyle to może ważyć mąka');
// break
default:
alert('Masz ' + parsedAge + ' lat')
} 