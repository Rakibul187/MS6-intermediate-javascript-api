const numbers = [12, 44, 55, 66, 77, 88, 99];
// numbers.forEach(n => console.log(n))

const findind = numbers.find(n => n > 50)
// console.log(findind)

const filtering = numbers.filter(n => n > 50 && n % 2 == 0);
console.log(filtering)

const square = x => {
    const result = x.map(n => n * 2)
    return result
}
// console.log(square(numbers))

const double = numbers.map(num => num * 2)
console.log(double)


// find scic student using filter 
const marks = 500;
const scicStudent = marks.find(mark => mark / 12 == 50)
console.log(scicStudent)