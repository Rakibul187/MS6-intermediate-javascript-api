/* 
1. global scope
2. local scope
3. block scope
*/

/*
 // block scope 
let x = 5;
{
    x = 10;
    console.log(`inside x ${x}`)
}
console.log(x)
 */

// function scope
function add() {
    const total = 3 + 5;
    console.log(total)
}
add()
console.log(total)