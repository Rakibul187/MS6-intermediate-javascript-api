const max = Math.max(100, 400, 200, 500, 300, 22, 44, 88);
console.log(max);


// use thre dots (...) with array (...arrayName) to access the array numbers & max numbers
const numbers = [12, 85, 999, 78];
console.log(...numbers)
const largest = Math.max(...numbers);
console.log(largest);

/* const numbers2 = numbers;
numbers.push(1111);
numbers2.push(666666)
console.log(numbers);
console.log(numbers2) */


// create new array by access another array value by ...
const numbers2 = [...numbers];
numbers.push(1111);
numbers2.push(666666)
console.log(numbers);
console.log(numbers2)

const group1 = ['Rahim', 'Karim', 'Jahid', 'Sobur', 'Retaa', 'Payeel', 'Sabana'];
console.log(...group1)
const group2 = ['saddam', 'heroo', 'shibaa', ...group1, 'sihab', 'shahin', 'sadat'];
group1.push('saddam', 'heroo', 'shibaa');
group2.pop()
console.log(group1);
console.log(group2);