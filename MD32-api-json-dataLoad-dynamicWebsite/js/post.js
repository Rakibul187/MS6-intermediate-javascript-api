function postButton() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => displayPost(posts))
}

function displayPost(posts) {
    const ol = document.getElementById('post-list')
    for (const post of posts) {
        console.log(post.body)
        const li = document.createElement('li')
        li.innerText = post.body
        li.style.backgroundColor = 'pink'
        li.style.border = '2px solid red'
        li.style.padding = '30px'
        ol.appendChild(li)
    }
}