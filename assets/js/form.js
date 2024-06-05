const username = document.getElementById('fusername');
const title = document.getElementById('ftitle');
const content = document.getElementById('fcontent');
const submitBtn = document.getElementById('fbtn');

function submissionHandler(event) {
    event.preventDefault();
    const newBlogPost = {
        'username': username.value,
        'title': title.value,
        'content': content.value
    };
    let blogPosts = loadFromLocalStorage();
    blogPosts.push(newBlogPost);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
}

function loadFromLocalStorage() {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts'));
    if (blogPosts) {
        return blogPosts;
    } else {
        return [];
    }
}

submitBtn.addEventListener('click', submissionHandler);