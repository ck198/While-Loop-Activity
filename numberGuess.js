// prompt the user to guess a number between 1 and 10
let guessNumber = parseInt(prompt("Guess a number between 1 and 10: "));
// correct answer
const correctAnswer = 3;

// Check the guess number and provide feedback
if (guessNumber > correctAnswer) {
    console.log("too high!");
} else if (guessNumber < correctAnswer) {
    console.log("too low!");
} else {
    console.log("Correct!");
}