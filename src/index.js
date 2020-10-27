// Draws number from 1..n
function drawNumber(n) {
  return Math.floor(Math.random() * n) + 1;
}

function lotto() {
  const range = 49;
  const a = drawNumber(range);
  console.log(a);
  return
}

function lottoTable() {
    for (let i = 0; i < 6; i++) {
    lotto();
  }
}

let table = new Array(6);
// table.push(lottoTable());
table[0] = `${lottoTable()}`;

console.log(table);

// const table = [];
//
// function lotto() {
//   if (table.length === 6) return;
//   const range = 49;
//   const a = drawNumber(range);
//   for (let i = 0; i < table.length; i++) {
//     if (a === table[1]){
//       return lotto()
//     }
//   }
//   table.push(a);
// }
//
// console.log(table);

