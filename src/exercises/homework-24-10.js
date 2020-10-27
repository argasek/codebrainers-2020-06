// ---------------------------
// Exercise 01
// ---------------------------

function drawNumber() {
    let numberArray = [];
    for(let i = 0; i < 6; i++ ){
        let number = Math.floor(Math.random()*49+1);
        numberArray.push(number); 
    }
    console.log(numberArray);
}

drawNumber(49)
