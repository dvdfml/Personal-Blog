const themeBtn = document.getElementById('theme-btn');
const img = themeBtn.children[0];
const body = document.body;

// Set default mode to dark
let mode = 'light';

themeBtn.addEventListener('click', () => {
    if (mode === 'light') {
        mode = 'dark';
        body.setAttribute('class', 'dark');
        img.setAttribute('src','./assets/images/sun.png');
    } else {
        mode = 'light';
        body.setAttribute('class', 'light');
        img.setAttribute('src','./assets/images/moon.png');
    };
});