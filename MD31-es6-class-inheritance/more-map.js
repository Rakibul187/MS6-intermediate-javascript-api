const numbers = [12, 56, 87, 44];

// make triple
const makeTriple = numbers.map(num => num * 3);
console.log(makeTriple)

// make half
const makeHalf = numbers.map(x => x / 2)
console.log(makeHalf)

// map on array
const friends = ["Tom Hanks", "Tom Cruise", "Tom Brady", "Tom Solaiman"];
const firstLetters = friends.map(friend => friend[0]);
console.log(firstLetters)

// name length using map on array 
const nameLengths = friends.map(friend => friend.length);
console.log(nameLengths)
console.log(Math.max(nameLengths))

// ================map on object ============
const products = [
    { id: 1, name: 'laptop', price: 40000 },
    { id: 2, name: 'mobile', price: 80000 },
    { id: 3, name: 'watch', price: 35000 },
    { id: 4, name: 'tablet', price: 23000 }
]

const items = products.map(product => product.name);
const productsPrices = products.map(product => product.price);
console.log(items);
console.log(productsPrices)
