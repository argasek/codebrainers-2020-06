// Task 1 

// Zadanie domowe nr 2: używając znanych Ci metod Array (reduce, indexOf, includes, push, filter, map etc.) zaprojektuj funkcję, 
// która jako argument przyjmuje tablicę liczb Number i zwraca posortowaną rosnąco tablicę liczb z usuniętymi duplikatami. Czyli np. dla tablicy:

// [1, 2, 2, 2, 5, 1, 22, 22, 3, 2, 1, 5, 7, 9]
// zwróci:
// [1, 2, 3, 5, 7, 9, 22]

// Do implementacji algorytmu nie możesz skorzystać z pętli do/while, while ani for. 
// wskazówka: skorzystaj z .reduce i jako początkową wartość akumulatora ustaw pustą tablicę - []

let array = [1, 2, 2, 2, 5, 1, 22, 22, 3, 2, 1, 5, 7, 9];

let sortedArray = array.sort(function(a, b){
  return a-b
});

let sortedUniqueArray = sortedArray.reduce(function(a,b){
  if (a.slice(-1)[0] !== b) a.push(b); // nie usuwamy ostatniego elementu tablicy
  return a;
},[]); // pusta tablica jest akumulatorem
  
console.log(sortedArray);
console.log(sortedUniqueArray);

