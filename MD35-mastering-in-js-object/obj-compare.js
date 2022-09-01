/* const first = { a: 5 };
const second = { a: 5 };
const third = second;
if (third === second) {
    console.log('they are same')  //they are same
}
else {
    console.log('they are not same')
} */
// do not use this method to compare object or array
const first = { a: 5, b: 23, c: 7 };
const second = { a: 5, c: 7, b: 23 };
const firstStringify = JSON.stringify(first)
const secondStringify = JSON.stringify(second)

function objectCompare(first, second) {
    const firstKeys = Object.keys(first)
    const secondkeys = Object.keys(second)
    if (firstKeys.length === secondkeys.length) {
        for (const key of firstKeys) {
            if (first[key] === second[key]) {
                return true //true but this is not perfect way to compare object
            }
            else { return false }
        }
    }
}
const result = objectCompare(first, second)
console.log(result) //terurn will be true but this is not perfect way to compare object