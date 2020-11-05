// const x = Math.round(0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1);
// const y = 1;
// console.log(x===y);

const arrayRepeated = [1, 2, 2, 2, 5, 1, 22, 22, 3, 2, 1, 5, 7, 9];
function result (array){
    const ArrayWithoutRepetition = [];
    const arr = array.filter(function (singleItem){
        if (!ArrayWithoutRepetition.includes(singleItem)){
            ArrayWithoutRepetition.push(singleItem)
        }
    });
    return ArrayWithoutRepetition.sort(function(a,b){
        return a-b;
        })
}
console.log(result(arrayRepeated));