function guessingGame() {
    const randomNumber = Math.floor(Math.random() * 100);
    let isGameOver = false;
    let numberOfGuesses = 0;

    return function(guess) {
        if (isGameOver) {
            return "The game is over, you already won!";
        }

        numberOfGuesses++;

        if (guess === randomNumber) {
            isGameOver = true;
            return `You win! You found ${randomNumber} in ${numberOfGuesses} guesses.`;
        } else if (guess < randomNumber) {
            return `${guess} is too low!`;
        } else {
            return `${guess} is too high!`;
        }
    };
}

module.exports = { guessingGame };
