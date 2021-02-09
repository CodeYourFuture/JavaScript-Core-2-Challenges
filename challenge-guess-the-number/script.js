let randomNumber = Math.floor(Math.random() * 100 + 1);
const finalOutPut = document.querySelector(".final-output"); // access final output element
const displayNumberOfTriesElement = document.querySelector(".Tries-output");
let IsGamePlaying = false;
let numberOfTries = 7; // number of tries allowed
let numberOfTriesTaken = 0;

function guessNumber() {
  // start game
  if (!IsGamePlaying) {
    //Collect input from the user

    let guess = document.querySelector(".inputs-Values").value;

    //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"

    if (guess === "" || (guess > 100) | (guess <= 0)) {
      finalOutPut.innerHTML = "Please enter a number  between 1 and 100";
    }

    //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
    else if (guess > randomNumber) {
      numberOfTries--;
      numberOfTriesTaken++;
      displayNumberOfTriesElement.innerHTML = `Number of tries: ${numberOfTries}`;
      finalOutPut.innerHTML = "Number is too high! Try again";
    }

    //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
    else if (guess < randomNumber) {
      numberOfTries--;
      numberOfTriesTaken++;
      displayNumberOfTriesElement.innerHTML = `Number of tries: ${numberOfTries}`;
      finalOutPut.innerHTML = "Number is too low! Try again";
    }

    //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
    else {
      numberOfTriesTaken++;
      finalOutPut.innerHTML = `${randomNumber} is correct. You Win!!!`;
      displayNumberOfTriesElement.innerHTML = `It took you: ${numberOfTriesTaken} tries`;
    }

    //  check if number of tries is zero and number is not guessed. if true end game and display result

    if (numberOfTries === 0 && guess !== randomNumber) {
      displayNumberOfTriesElement.innerHTML = `You Lose! The Number was: ${randomNumber}`;
      finalOutPut.innerHTML = "";
      IsGamePlaying; // end game
    }
  }
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  finalOutPut.innerHTML = "Please enter a number  between 1 and 100";
  IsGamePlaying = false;
  //Reset randomNumber
  let randomNumber = Math.floor(Math.random() * 100 + 1);
  //Reset users input field
  let guess = (document.querySelector(".inputs-Values").value = "");
  //Reset tries, and triesTaken by the user
  numberOfTries = 7;
  displayNumberOfTriesElement.innerHTML = `Number of tries: ${numberOfTries}`;
  numberOfTriesTaken = 0;
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.getElementById("newGame").addEventListener("click", newGame);
document.addEventListener("keypress", keyBoardEvents);
