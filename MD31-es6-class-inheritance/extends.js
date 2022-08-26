class TeamMember {
    name;
    location;
    tech;
    constructor(name, location, tech) {
        this.name = name;
        this.location = location;
        this.tech = tech;
    }
    provideFeedback() {
        console.log(`${this.name} Thank you for your feedback`)
    }
}

class Instructor extends TeamMember {
    designation = 'web course instructor'
    team = 'web team'
    constructor(name, location, tech) {
        super(name, location, tech)
    }
    startSupportSession(time) {
        console.log(`start support session at ${time}`)
    }
    creatQuiz(module) {
        console.log(`Please create quiz module ${module}`)
    }
}

class Developer extends TeamMember {
    designation = 'web course instructor'
    team = 'web team'
    constructor(name, location, tech) {
        super(name, location)
    }
    developFeature(Feature) {
        console.log(`Please develop the ${Feature}`)
    }
    reales(version) {
        console.log(`Please realese the version ${version}`)
    }
}

class JobPlacement extends TeamMember {
    designation = 'Job placement commandos'
    team = 'job placement team'
    constructor(name, location, tech) {
        super(name, location, tech)
    }
    provideResume(time) {
        console.log(`start support session at ${time}`)
    }
    prepareStudent(module) {
        console.log(`Please create quiz module ${module}`)
    }
}

const alia = new JobPlacement('Alia my crush babby', 'Dhaka', 'hiring');
// console.log(alia)

const rokibul = new Developer('Rokibul', 'Dhaka', 'Developer');
console.log(rokibul);
rokibul.provideFeedback()