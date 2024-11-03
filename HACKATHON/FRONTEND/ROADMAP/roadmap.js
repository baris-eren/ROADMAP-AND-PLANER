function toggleMenu() {
    var navList = document.getElementById("nav-list");
    if (navList.style.display === "block") {
        navList.style.display = "none";
    } else {
        navList.style.display = "block";
    }
}

document.getElementById("create-button").addEventListener("click", function() {

    const roadmapData = document.getElementById("q2").value;

    fetch("https://api.gemini.com/roadmap", { 
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ roadmap: roadmapData }) 
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("response-container").innerText = "Gemini yanıtı: " + data.response;
    })
    .catch(error => {
        console.error("Bir hata oluştu:", error);
        document.getElementById("response-container").innerText = "Bir hata oluştu. Lütfen tekrar deneyin.";
    });
});
