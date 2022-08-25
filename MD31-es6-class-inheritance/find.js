//  find will give only first matching value & filter give all matching

const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];

const fivesMultiple = numbers.find(num => num % 5 === 0);
const fivesMultipleF = numbers.filter(num => num % 5 === 0);
console.log(fivesMultiple)
console.log(fivesMultipleF)

const products = [
    { id: 1, name: 'laptop', price: 40000 },
    { id: 2, name: 'mobile', price: 80000 },
    { id: 3, name: 'watch', price: 35000 },
    { id: 4, name: 'tablet', price: 23000 }
]

const expensive = products.find(product => product.price > 30000);
const expens = products.filter(product => product.price > 30000 & product.price <= 50000);
console.log(expensive);
console.log(expens)