const pokedex = document.getElementById('pokeDex');
const blog = document.getElementById('blog');
const loginPage = document.getElementById('loginPage');
const gitHub = document.getElementById('gitHub');

pokeDex.addEventListener('click', function() {
    window.open('https://guterresthomas.github.io/PokeDex/', '_blank');
});

blog.addEventListener('click', function() {
    window.open(' https://guterresthomas.github.io/BlogResp/', '_blank');
});

loginPage.addEventListener('click', function() {
    window.open('https://guterresthomas.github.io/LoginPage/', '_blank');
});

gitHub.addEventListener('click', function() {
    window.open('https://github.com/GuterresThomas', '_blank');
});