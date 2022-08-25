const users = [{ id: 1, name: 'abul', job: 'doctor' }]
// console.log(users[0].name, users[0].job)

const data = {
    count: 5000,
    data: [{ id: 1, name: 'babul', job: 'leader' },
    { id: 2, name: 'babul', job: 'leader' }
    ]
}
// console.log(data.data[0].id)
// console.log(data.data[0].name)
// console.log(data.data[0].job)

const firstJob = data.data[0].job;

const user = {
    id: 50001,
    name: 'Thomas Alba Edison',
    address: {
        street: {
            first: '35/a kochukhet lake',
            second: 'third floor',
            third: 'right side'
        },
        postOffice: 'cantonnment',
        city: 'Dhaka'
    }
}
const userFloor = user.address.street.second;
console.log(userFloor)

// typeerror: cannot read properties of undefined means : something missing what we want to do there 