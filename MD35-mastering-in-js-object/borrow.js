const kodomAli = {
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
const badamAli = {
    name: 'kaca badam',
    money: 8000
}
const result2 = kodomAli.exam.call(badamAli)
// console.log(result2)  //kaca badam is participating in an exam.
const badamMoney = kodomAli.treatDey.call(badamAli, 400, 40);
// console.log(badamMoney)  //7560  (call coma  borrow method)
const badamMoney2 = kodomAli.treatDey.apply(badamAli, [1000, 50]);
console.log(badamMoney2)  //6510  (apply array borrow method)
const badamAliTreat = kodomAli.treatDey.bind(badamAli)
const remaining = badamAliTreat(1200, 30)
console.log(remaining)  //5280  (bind method) new function create kore bar bar call kora jay