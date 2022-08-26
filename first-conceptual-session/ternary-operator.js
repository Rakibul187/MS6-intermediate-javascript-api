const isStudent = false;

// without ternary operator
if (isStudent === true) {
    console.log('he is a student')
}
else {
    console.log('he is not a student')
}

// with ternary operator ( :)
const sentence = (isStudent === true) ? "He is a student" : "He is not a student";
console.log(sentence)