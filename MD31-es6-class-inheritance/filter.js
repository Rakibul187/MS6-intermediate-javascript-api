const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
const bigNumbers = numbers.filter(number => number > 20 & number < 50);
const tiny = numbers.filter(num => num < 20);
const even = numbers.filter(num => num % 2 === 0)
const odd = numbers.filter(num => num % 2 === 1)
console.log(bigNumbers);
console.log(tiny);
console.log(even)
console.log(odd)

const products = [
    { id: 1, name: 'laptop', price: 40000 },
    { id: 2, name: 'mobile', price: 80000 },
    { id: 3, name: 'watch', price: 35000 },
    { id: 4, name: 'tablet', price: 23000 }
]
const desireProduct = products.filter(product => product.price > 50000);
console.log(desireProduct)