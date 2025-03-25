let historyList = document.getElementById("history-list");

function appendValue(value) {
    let display = document.getElementById("result");
    
    // Otomatis tambahkan * sebelum tanda kurung jika perlu
    if (value === "(" && display.value.length > 0) {
        let lastChar = display.value.slice(-1);
        if (!isNaN(lastChar) || lastChar === ")") {
            display.value += "*";
        }
    }

    display.value += value;
}

function clearDisplay() {
    document.getElementById("result").value = "";
}

function calculate() {
    try {
        let expression = document.getElementById("result").value;

        // Tambahkan '*' secara otomatis sebelum tanda kurung jika diperlukan
        expression = expression.replace(/(\d)\(/g, "$1*("); // Contoh: 2(3) → 2*(3)

        let result = eval(expression);
        document.getElementById("result").value = result;

        // Simpan ke riwayat
        addToHistory(expression, result);
    } catch (error) {
        alert("Perhitungan tidak valid");
    }
}

function addToHistory(expression, result) {
    let listItem = document.createElement("li");
    listItem.textContent = `${expression} = ${result}`;
    historyList.prepend(listItem); // Tambahkan ke atas riwayat
}

function goHome() {
    window.location.href = "/Utama/background.html";
}
