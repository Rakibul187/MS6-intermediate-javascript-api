const user = { id: 1, name: 'Gorib AAmir', job: 'actor', age: 24 }
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified)

/* 
normal :
{ id: 1, name: 'Gorib AAmir', job: 'actor' }

after json stringify :
{"id":1,"name":"Gorib AAmir","job":"actor"}
*/
const shop = {
    name: 'Alia',
    address: {
        street: 'Kochukhet vut er goli',
        city: 'Ranbir',
        country: 'BD'
    },
    products: ['Laptop', 'Mic', 'Monitor', 'Keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}
console.log(shop)
const shopJSON = JSON.stringify(shop);
console.log(shopJSON)
console.log(typeof shop)
console.log(typeof shopJSON)

const shopObj = JSON.parse(shopJSON);
console.log(shopObj);
console.log(typeof shopObj)