const pokedex = document.getElementById('pokeDex');
const blog = document.getElementById('blog');
const loginPage = document.getElementById('loginPage');
const gitHub = document.getElementById('gitHub');
const whatsBtn = document.getElementById('whatsBtn');
const otica = document.getElementById('otica');

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

whatsBtn.addEventListener('click', function() {
    window.open('https://wa.me/5555997004539', '_blank');
});

otica.addEventListener('click', function() {
    window.open('https://guterresthomas.github.io/otica/', '_blank');
});