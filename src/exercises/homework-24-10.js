// ---------------------------
// Exercise 02
// ---------------------------

function drawNumber() {
    let numberArray = [];
    for(let i = 0; i < 6; i++ ){
        let number = Math.floor(Math.random()*49+1);
        if(numberArray.indexOf(number) === -1){
            numberArray.push(number); 
        }else{
            i--;
        }
    }
    console.log(numberArray);
}
drawNumber(49)