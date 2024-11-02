function toggleMenu() {
    const dropdown = document.getElementById('dropdownMenu');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}  

      // Textarea boyutunu otomatik ayarlama fonksiyonu
document.querySelectorAll('textarea').forEach(function (textarea) {
    textarea.addEventListener('input', function () {
        this.style.height = 'auto'; // Önce yüksekliği sıfırla
        this.style.height = (this.scrollHeight) + 'px'; // İçerik yüksekliğine göre ayarla
    });
});