const boys = [
    { name: 'abul', job: 'sorkari', salary: 17000 },
    { name: 'babul', job: 'besorkari', salary: 25000 },
    { name: 'kabul', job: 'sorkari', salary: 21000 },
    { name: 'cabul', job: 'besorkari', salary: 47000 },
    { name: 'jabul', job: 'sorkari', salary: 22000 },
    { name: 'cabul', job: 'besorkari', salary: 55000 }
]

// sorkar +20000 or besorkari +40000

const selected = boys.filter(boy => boy.job === 'sorkari' && boy.salary >= 20000 || boy.job === 'besorkari' && boy.salary >= 40000);
console.log(selected)
const vaggobans = selected.map(vaggoban => console.log(vaggoban.name))
// console.log(vaggobans)