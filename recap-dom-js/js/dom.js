document.getElementById('apply-bg').addEventListener('click', function () {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightBlue'
    }
})

document.getElementById('center-third').addEventListener('click', function () {
    const third = document.getElementById('third-friend');
    third.style.textAlign = 'center'
})

document.getElementById('add-friend').addEventListener('click', function () {
    const friendsContainer = document.getElementById('friends');
    const div = document.createElement('div');
    div.classList.add('friend');

    div.innerHTML = `
    <h3 class="friend-name">I am new friend </h3>
    <p>I am new here wish me best</p>
    `
    friendsContainer.appendChild(div)
})