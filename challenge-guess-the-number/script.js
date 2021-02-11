let randomNumber = Math.floor(Math.random() * 100 + 1);
let tries = 5;
let triesTaken = 0;
function guessNumber() {
  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;
  const OUTPUT = document.querySelector(".final-output");
  if (triesTaken <= tries) {
    //If the user inputs are bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
    if (!guess || guess < 0 || guess > 100) {
      OUTPUT.textContent = "Please enter a number between 1 and 100";
      triesTaken++;
    }
    //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print
    else if (guess > randomNumber) {
      OUTPUT.textContent="Too high, try again";
      triesTaken++;
    }
    //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
    else if (guess < randomNumber) {
      OUTPUT.textContent="Too low, try again";
      triesTaken++;
    }
    //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
    else {
      OUTPUT.textContent="Guess is correct. You win!";
    }
    document.querySelector(".inputs-Values").focus();
  } else {
    OUTPUT.textContent="Sorry, you lost! Play agin.";
  }
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button

document.querySelector(".btnNewGame").addEventListener("click", newGame);
function newGame() {
  //Your code here
  //Reset randomNumber
  randomNumber = Math.floor(Math.random() * 100 + 1);
  //Reset users input field
  document.querySelector(".inputs-Values").value = "";
  //Reset tries, and triesTaken by the user
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
