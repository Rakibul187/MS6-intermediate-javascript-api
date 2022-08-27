function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}
loadPosts()

function displayPosts(posts) {
    const postContainer = document.getElementById('post-container')
    for (const post of posts) {
        console.log(post)
        const postId = post.id;
        const postTitle = post.title;
        const postBody = post.body;

        const div = document.createElement('div')
        div.classList.add('post-area')
        div.innerHTML = `
        <h5>${postId}</h5>
        <h3>${postTitle}</h3>
        <p>${postBody}</p>
        `
        postContainer.appendChild(div)
    }
}