function toggleMenu() {
    var navList = document.getElementById("nav-list");
    if (navList.style.display === "block") {
        navList.style.display = "none";
    } else {
        navList.style.display = "block";
    }
}

document.getElementById("create-button").addEventListener("click", function() {
    // Kullanıcının girdiği roadmap konusu
    const roadmapData = document.getElementById("q2").value;

    // API'ye POST isteği gönderiyoruz
    fetch("https://api.gemini.com/roadmap", { // Burada gerçek API URL'sini girin
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ roadmap: roadmapData }) // Kullanıcının roadmap verisini gönderiyoruz
    })
    .then(response => response.json()) // Yanıtı JSON formatında bekliyoruz
    .then(data => {
        // Yanıtı ekrana yazdırıyoruz
        document.getElementById("response-container").innerText = "Gemini yanıtı: " + data.response;
    })
    .catch(error => {
        console.error("Bir hata oluştu:", error);
        document.getElementById("response-container").innerText = "Bir hata oluştu. Lütfen tekrar deneyin.";
    });
});
