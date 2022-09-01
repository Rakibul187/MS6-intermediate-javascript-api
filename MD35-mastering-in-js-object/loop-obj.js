const numbers = [1, 4, 7, 9, 33];
for (const number of numbers) {
    console.log(number); // 1 4 7 9 33
}
// for of cant used on object
const bottle = { color: 'yellow', price: 50, isCleaned: true, capacity: 100 };
//  1. first option to lop through on object
const keys = Object.keys(bottle)
console.log(keys) //[ 'color', 'price', 'isCleaned', 'capacity' ]
for (const key of keys) {
    console.log(key)  //color price isCleaned capacity
}
//  for in loop on object direct.for in for object
for (const key of keys) {
    console.log(key); //color price isCleaned capacity
}
// advanced
for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value)
}