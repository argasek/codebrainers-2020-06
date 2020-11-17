const someString = 'Ala ma kota, kot ma mysz.';
// console.log(someString.length-1);

let reversedString = "";

for (let i = someString.length-1; i >= 0; i--) {
  reversedString += someString[i];

}

console.log(reversedString);
