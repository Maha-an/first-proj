// Generate a random number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;

const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");

guessButton.addEventListener("click", function() {
    let userGuess = Number(guessInput.value);

    if (!userGuess || userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a valid number between 1 and 100!";
        return;
    }

    if (userGuess === secretNumber) {
        message.textContent = "🎉 Correct! You won! Refresh to play again.";
        message.style.color = "#00b894";
        guessButton.disabled = true;
    } else if (userGuess < secretNumber) {
        message.textContent = "📉 Too low! Try a higher number.";
        message.style.color = "#e17055";
    } else {
        message.textContent = "📈 Too high! Try a lower number.";
        message.style.color = "#e17055";
    }
});