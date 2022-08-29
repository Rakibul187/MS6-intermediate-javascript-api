const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => displayUsers(data.results))
}

const displayUsers = users => {
    const usersContainer = document.getElementById('users-container')

    for (const user of users) {
        console.log(user)
        const usersDiv = document.createElement('div')
        usersDiv.classList.add('user');
        usersDiv.innerHTML = `
        
        <h3>${user.name.first} ${user.name.title} ${user.name.last}</h3>
        <p>User Email : ${user.email}</p>
        <p>User Location : ${user.location.city}, ${user.location.country}</p>
        <p>User Email : ${user.picture.large}</p>
        
        `

        usersContainer.appendChild(usersDiv)


    }
}
loadUsers()