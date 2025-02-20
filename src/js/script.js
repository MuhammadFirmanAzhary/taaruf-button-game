
function showMessage() {
    let messages = [
        "Wah, kamu beneran orang spesial! 😍",
        "Pilihan terbaik! Kita cocok banget nih! 💖",
        "Subhanallah, akhirnya aku menemukanmu! 💕",
        "Ya Allah, hati ini bergetar karena kamu! 😘",
        "MashaAllah, jodoh itu dekat kalau hati kita sama-sama ikhlas! 💞"
    ];
    let randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("message").innerText = randomMessage;
    document.getElementById("message").style.display = "block";
}

let noButton = document.getElementById("noButton");

noButton.addEventListener("mouseover", moveNoButton); 
noButton.addEventListener("touchstart", moveNoButton); 
function moveNoButton() {
    let moveX = (Math.random() - 0.5) * 400;
    let moveY = (Math.random() - 0.5) * 200;
    noButton.style.transform = `translate(${moveX}px, ${moveY}px)`;
}
