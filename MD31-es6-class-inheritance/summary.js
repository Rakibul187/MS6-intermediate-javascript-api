/* 
1. optional chaining 
student.marks?.math

2. (must)
map, filter, find

3. (optional)
forEach, reduce (advanced)

4. class

5. (optional):
inheritance, super

6. (must) :
prototypical inheritance 
*/


function min(nums) {
    return Math.min(nums)
}
console.log(min([1, 3, 2]))

const { x, y, z } = { x: 1, y1: 2, z: 3 };
console.log(y)

const nums = [1, 2, 3, 4, 5];
let output = nums.filter(n => n % 2);
console.log(output);