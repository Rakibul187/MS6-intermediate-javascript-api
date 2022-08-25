// 1.  var let const 
// breakup with var
const numbers = [12, 15, 66, 888];
let salary = 500000;
salary = 550000;

// 2. default parameter
function calculateSalary(salary, tax = .25, bonus = 0) {
    const remaining = salary - salary * tax;
    const total = remaining + bonus;
    return total;
}

//  3. template string 
const elemenntHTML = `
<div>
     <h1> Name :  </h1>
     <p> Address : </p>
     <p> Salary :${calculateSalary(10000, 0, 0)} </p>
     <p> Others : ${numbers[2]}</p>
</div>
`
console.log(elemenntHTML)

// 4. arrow function 

const doubleIt = x => x * 10;

const calculateSalary2 = (salary, tax, bonus) => salary - salary * tax + bonus;

// 5. spread 

const ages = [11, 13, 15, 14, 10, 16];
const newAge = [100, 30, 40, ...ages, 66, 77, 88]
console.log(newAge)

// 6. destructuring 
const { x, y, ...r } = { x: 2333, y: 22, z: 100, name: "sakib al hasan", salary: 1000000 };
console.log(r)
console.log(x)

const [a, b, ...d] = [22, 55, 77, 99, 33, 44, 55, 11, 155]
console.log(...d)
