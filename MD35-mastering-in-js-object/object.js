// 1. create object using object literals
/* const player = {};
player.name = 'Nirob Mia';
player.speciality = 'Batsman';
player.bat = function () {
    console.log('swing the bat from the function hehe')
}
console.log(player)
player.bat()
 */
const student = {
    name: 'pandey',
    job: 'roj khay andey',
    ball: function () {
        console.log('Through the ball')
    },
    salary: 1000000
}
// console.log(student)

//  2. object constructor
const person = new Object();
// console.log(person)

// 3. object create ethod
const item = Object.create(null)
// console.log(item)

const atel = Object.create(student);
// console.log(atel)
// console.log(atel.name)
// console.log(atel.friend)

// 4. class
class Person {
    name = 'Abul';
    address = 'sodor ghat';
    constructor(age) {
        this.age = age;
    }
}
const person1 = new Person(56);
console.log(person1)