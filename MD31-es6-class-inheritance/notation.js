const student = {
    bame: 'kolim uddin',
    age: 15,
    class: 'Ten',
    marks: {
        math: 78,
        physics: 89,
        chemestry: 65
    }
}
// dotation 
const physicsMarks = student.marks.physics;
console.log(physicsMarks);

// notation
const marksss = student['marks'];
const mathMark = student['marks']['math']

// 
const subject = 'math';
const subMark = student.marks[subject]

console.log(marksss);
console.log(mathMark)
console.log(subMark)