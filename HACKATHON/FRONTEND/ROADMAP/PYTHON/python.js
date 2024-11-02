let lastClicked = null;

function toggleMenu() {
    const dropdown = document.getElementById('dropdownMenu');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function toggleTopics(konu) {
    const selectedTopic = document.getElementById(konu);
    
    if (lastClicked === konu) {
        const topics = document.querySelectorAll('.next-topics');
        topics.forEach(topic => topic.style.display = 'none');
        lastClicked = null; 
    } else {
        const topics = document.querySelectorAll('.next-topics');
        topics.forEach(topic => topic.style.display = 'none');
        
        if (selectedTopic) {
            selectedTopic.style.display = 'block';
            lastClicked = konu;
        }
    }
}

function toggleTopics(id) {
    const topics = document.getElementById(id);

    if (topics.style.display === "none" || topics.style.display === "") {
        topics.style.display = "flex";
    } else {
        topics.style.display = "none";
    }
}
