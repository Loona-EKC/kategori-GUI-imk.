// Fungsi untuk menyimpan file sebagai .txt
function saveFile() {
    const text = document.getElementById("notepad").value;
    const blob = new Blob([text], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "catatan.txt";
    a.click();
}

// Fungsi untuk membuka file .txt
function openFile() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".txt";

    input.addEventListener("change", function () {
        const file = input.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById("notepad").value = e.target.result;
        };

        if (file) {
            reader.readAsText(file);
        }
    });

    input.click();
}

// Fungsi untuk menghapus teks di notepad
function clearText() {
    document.getElementById("notepad").value = "";
}

function goHome() {
    window.location.href = "/Utama/background.html";
}

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".glowing-container");
    const numBubbles = 50; // Jumlah lingkaran neon

    for (let i = 0; i < numBubbles; i++) {
        let bubble = document.createElement("div");
        bubble.classList.add("glowing");
        container.appendChild(bubble);

        let size = Math.random() * 20 + 10; // Ukuran antara 10px hingga 30px
        let posX = Math.random() * window.innerWidth; // Posisi acak di X
        let posY = Math.random() * window.innerHeight; // Posisi acak di Y
        let duration = Math.random() * 5 + 3; // Kecepatan animasi acak

        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${posX}px`;
        bubble.style.top = `${posY}px`;
        bubble.style.animationDuration = `${duration}s`;
    }
});

