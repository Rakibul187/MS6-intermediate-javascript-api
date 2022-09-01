const bottle = { color: 'yellow', price: 50, isCleaned: true, capacity: 100 };
const keys = Object.keys(bottle)
console.log(keys);  //[ 'color', 'price', 'isCleaned', 'capacity' ]
['yellow', 50, true, 100]
const values = Object.values(bottle)
console.log(values); //[ 'yellow', 50, true, 100 ]
const pair = Object.entries(bottle)
console.log(pair); //const bottle = { color: 'yellow', price: 50, isCleaned: true, 
delete bottle.isCleaned
console.log(bottle); //{ color: 'yellow', price: 50, capacity: 100 }
Object.seal(bottle)  //after seal u cant delete& cant add but u can modify/change property/value;
Object.freeze(bottle) //after using freeze u cant delete, add & even modify any property or value