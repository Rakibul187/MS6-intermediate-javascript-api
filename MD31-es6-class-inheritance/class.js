// class means syntactic suger in es6 
class Instructor {
    name;
    designation = 'web course instructor'
    team = 'web team'
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    startSupportSession(time) {
        console.log(`start support session at ${time}`)
    }
    creatQuiz(module) {
        console.log(`Please create quiz module ${module}`)
    }
}
const aamir = new Instructor('aamir', 'mumbai');
console.log(aamir)

const rakib = new Instructor('Rakibul Islam Rakib', 'Dhaka');
console.log(rakib)
// aamir.startSupportSession('9:00');
// aamir.creatQuiz(30);
