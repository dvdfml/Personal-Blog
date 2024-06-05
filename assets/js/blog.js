const main = document.body.children[1];
const backBtn = document.getElementById('back-btn')

function loadFromLocalStorage() {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts'));
    if (blogPosts) {
        return blogPosts;
    } else {
        return [];
    }
}

function displayBlogPosts(blogPosts) {
    for (blogPost of blogPosts) {
        console.log(blogPost);
        const card = document.createElement('div');
        const title = document.createElement('h2');
        const content = document.createElement('p');
        const username = document.createElement('div');

        title.textContent = blogPost.title;
        content.textContent = blogPost.content;
        username.innerHTML = `Posted by: ${blogPost.username}`;

        card.setAttribute('class', 'card');

        card.appendChild(title);
        card.appendChild(content);
        card.appendChild(username);
        main.appendChild(card);
    };
}

displayBlogPosts(loadFromLocalStorage());

backBtn.addEventListener('click', () => {
    window.document.location = './index.html';
})
