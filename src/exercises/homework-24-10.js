// ---------------------------
// Exercise 3
// ---------------------------

//---------------------
// Exercise-03 Homework-24.10.2020
//---------------------

const a = [15, 22, 7, 49, 3, 2];
const b = [15, 7, 22, 18, 38, 2];
const c =[];

for (i=0; i<a.length; i++){
    for(j=0; j<b.length; j++){
        if (a[i] === b[j]){
            c.push(a[i]);       
        }
    }
}

console.log(c);
console.log(c.length)
