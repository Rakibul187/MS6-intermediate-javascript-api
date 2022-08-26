const person = {
    name: 'rakib',
    education: {
        schoolName: '',
        subjects: [
            { name: "bangla", marks: 70 },
            { name: "english", marks: 76 },
            { name: "math", marks: 75 }
        ]

    }
}
console.log(person.education.subjects[2].marks)