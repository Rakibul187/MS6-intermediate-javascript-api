const student = {
    name: 'Kodom Ali',
    money: 5000,
    study: 'math',
    subjects: ['calculas', 'aljebra', 'geometry', 'poetry'],
    exam: function () {
        return this.name + ' is participating in an exam.'
    },
    improveExam: function (subject) {
        this.exam();
        return `${this.name} is taking improvement exam on ${this.subjects[0]}`
    },
    treatDey: function (amount, tips) {
        this.money = this.money - amount - tips;
        return this.money
    }
}
const reExam = student.improveExam();
// console.log(reExam)
const remaining = student.treatDey(1000, 200);
console.log(remaining)
