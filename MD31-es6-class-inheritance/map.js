const numbers = [11, 22, 33, 44, 55, 66, 77, 88];

/* 
function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubleIt(number);
        output.push(doubled)
    }
    return output;
}

function doubleItOld(number) {
    return number * 2
}
 */

// shortcut by using map 
const doubleIt = num => num * 2;
const makeDouble = numbers.map(doubleIt);
console.log(makeDouble)

const makeDoubleDirect = numbers.map(num => num * 2);
console.log(makeDoubleDirect);

/*
const result = getDoubles(numbers);
console.log(result) */

/* 
purpose :
1. get an array 
2. for every elements of the array do something 
3. store the result in an array 
4. return the result array
*/