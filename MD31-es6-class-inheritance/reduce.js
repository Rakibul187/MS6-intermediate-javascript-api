// map , forEach, filter, find, reduce 
// const numbers = [1, 2, 3, 4, 5];
/* 
.reduce(accumulatorFunction, initial value)
accumulator function use two parameters
*/

// const total = numbers.reduce((previous, current) => previous + current, 0);
// console.log(total)

const numbers = [1, 2, 3, 4, 5];
const numbersSum = numbers.reduce((previous, current) => previous + current, 0);
console.log(numbersSum)

const multiply = numbers.reduce((previous, current) => previous * current, 1);
console.log(multiply);

// with multiline
const addition = numbers.reduce((previous, current) => {
    console.log(previous, current)
    return previous + current;
}, 0);
console.log(addition)
