let randomNumber = Math.floor(Math.random() * 100 + 1);
let numberChoiceInfo = document.querySelector(".final-output");
  let trialTimes = document.querySelector(".Tries-output")
  let startGame = true;
  let endGame = false;
  let counter = 7;
  let triesTaken = 0;
  let numberOfTries;
function guessNumber() {
  //Collect input from the user
  if (startGame) {
      let guess = document.querySelector(".inputs-Values").value;

      if (guess <= 0 || guess === "" || guess > 100) {
        numberChoiceInfo.innerHTML = `Please enter a number between 1 and 100`;
      } else if (guess > randomNumber) {
        counter -= 1;
        triesTaken += 1;
        numberChoiceInfo.innerHTML = `Number is too high, try again.`;
        numberOfTries = trialTimes.innerHTML = `Number of tries: ${counter}`;
      } else if (guess < randomNumber) {
        counter -= 1;
        triesTaken += 1;
        numberChoiceInfo.innerHTML = `Number is too low, try again.`;
        numberOfTries = trialTimes.innerHTML = `Number of tries: ${counter}`;
      } else {
        counter -= 1;
        triesTaken += 1;
        numberChoiceInfo.innerHTML = `Congratulations!!! ${guess} is the correct number. You win!`;
        numberOfTries = trialTimes.innerHTML = `It took you ${triesTaken} guess(es)`;
        startGame = endGame;
      }

      if (counter === 0 && guess !== randomNumber) {
        numberOfTries = trialTimes.innerHTML = `Ohh no you lose, the number was ${randomNumber}`;
        numberChoiceInfo.innerHTML = "";
        startGame = endGame;
      }
    }
  }

  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"

  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)

  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)

  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"


// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button

function newGame() {
  counter = 7;
    triesTaken = 0;
    randomNumber = Math.floor(Math.random() * 100 + 1);
    guess = document.querySelector(".inputs-Values").value = "";
    numberOfTries = trialTimes.innerHTML = `Number of tries: ${counter}`;
    numberChoiceInfo.innerHTML = "Get a number between 1 and 100";
    startGame = true;
  //Your code here
  //Reset randomNumber
  //Reset users input field
  //Reset tries, and triesTaken by the user
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.querySelector(".btnNewGame").addEventListener("click", newGame);
document.addEventListener("keypress", keyBoardEvents);
