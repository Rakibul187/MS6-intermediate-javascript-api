const money = 1000;

// function expression
const add1 = function add(first, second) {
    const total = first + second;
    return total;
}

//function expression with  annonymous function
const add2 = function (first, second) {
    const total = first + second;
    return total;
}

const add3 = function (first, second) {
    return first + second;
}

// arrow function 1 addition
const add4 = (first, second) => first + second;

// multiple parameter 
const addition = (a, b, c, d, e) => a + b + c + d + e;

//  arrow function 2 for multiply
const add5 = (first, second) => first * second;

// ?arrow function 3 division
const add6 = (first, second) => first / second;

// ? no parameter arrow function 
const getPie = () => 3.1416

// one parameter multiply
const multiply = (number) => number * number;

// one parameter simplified version 
const multiply2 = number => number * number

// multiline arrow function 
const doMath = (a, b, c) => {
    const firstSum = a + b;
    const secondSum = b + c;
    const thirdSum = a + c;
    const sumResult = firstSum + secondSum + thirdSum;
    const result = sumResult / 3;

    return result;
}

const result = add5(12, 22);
console.log(result)