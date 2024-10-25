
function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu.classList.contains("menu-hidden")) {
        menu.classList.remove("menu-hidden");
        menu.classList.add("menu-visible");
    } else {
        menu.classList.remove("menu-visible");
        menu.classList.add("menu-hidden");
    }
}

const text = "Neye ihtiyacın var?";
const textElement = document.getElementById("animated-text");
let index = 0;

function type() {   
    if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 200);
    }
}

document.querySelector('.menu-toggle').addEventListener('click', function() {
    const menuContent = document.querySelector('.menu-content');
    menuContent.classList.toggle('open'); 
});

window.onload = type;
