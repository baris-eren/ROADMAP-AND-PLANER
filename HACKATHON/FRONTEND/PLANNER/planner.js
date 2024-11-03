function toggleMenu() {
    const dropdown = document.getElementById('dropdownMenu');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}  

document.querySelectorAll('textarea').forEach(function (textarea) {
    textarea.addEventListener('input', function () {
        this.style.height = 'auto'; 
        this.style.height = (this.scrollHeight) + 'px'; 
    });
});