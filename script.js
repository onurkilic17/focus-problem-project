// İlk sayaç değeri
let counter = 0;

// HTML seçme
const counterElement = document.getElementById('counter');
const increaseButton = document.getElementById('increaseButton');

// Butona tıklanınca sayaç artırma işlemi
increaseButton.addEventListener('click', () => {
    counter++;
    counterElement.textContent = counter;
});
