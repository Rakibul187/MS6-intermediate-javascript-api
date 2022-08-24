function add(num1, num2) {

    // num2 = num2 || 0;
    // or 

    /* 
        if (num2 === undefined) {
            num2 = 0
        } */

    console.log(num1, num2)
    const sum = num1 + num2;
    return sum
}

const result = add(20);
console.log(result);