function intersection (arr1, arr2) {
    const interArray = arr1.filter(function filterCommon (element) {
        return arr2.includes(element);
    })
    return interArray
}
const a = [15, 22, 7, 49, 3, 2];
const b = [15, 7, 22, 18, 38, 2];
console.log(intersection(a, b));