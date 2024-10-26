let lastClicked = null;

function toggleMenu() {
    const dropdown = document.getElementById('dropdownMenu');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function toggleTopics(konu) {
    const selectedTopic = document.getElementById(konu);
    
    if (lastClicked === konu) {
        // Eğer aynı kutucuğa tıkladıysa, önceki konuları geri getir
        const topics = document.querySelectorAll('.next-topics');
        topics.forEach(topic => topic.style.display = 'none');
        lastClicked = null; // Seçimi sıfırla
    } else {
        // Tüm konuları gizle
        const topics = document.querySelectorAll('.next-topics');
        topics.forEach(topic => topic.style.display = 'none');
        
        // Seçilen konuyu göster
        if (selectedTopic) {
            selectedTopic.style.display = 'block';
            lastClicked = konu; // Geçerli konuyu kaydet
        }
    }
}
