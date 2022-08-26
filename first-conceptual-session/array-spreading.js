const numbers = [5, 2, 6, 8, 2, 9]

// console.log(...numbers);
// console.log(Math.min(...numbers))
// console.log(Math.max(...numbers))

const num2 = [333, 55, 77, 888]

const newArr = [55, 77, 88, ...numbers, 99, 44, 77, ...num2, 55, 77, 22, 33]

// console.log(newArr)

// destructure
const [a, b, ...rest] = numbers;
// console.log(a, b)
// console.log(a, b, rest)
// console.log(rest)

const num3 = [33, 66, 88, 99]
const num4 = [...num3]

num3.push(100)
num3.push(100222)

// console.log(num3)
// console.log(num4)

// object destructuring 

const person = {
    name: "Rakib",
    age: 24,
    height: 6.7,
    p: [1, 3, 5, 7, 8, 9]
}
const { name, height, p } = person;
console.log(height)
console.log(p)
console.log(...p)
console.log(Math.min(...p))
console.log(Math.max(...p))
