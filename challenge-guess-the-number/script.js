function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}
let randomNumber = getRandomNumber();
let numOfTriesLeft = 7;
let numOfTriesUsed = 0;
let triesMsg = document.querySelector(".tries-output");
let numOfTries = document.querySelector(".tries");
//

function guessNumber() {
  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;
  let message = document.querySelector(".final-output");

  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
  //triesMsg.innerText += triesNum;
  if (guess < 1 || guess == "" || guess > 100) {
    message.textContent = "Please enter a number between 1 and 100";
    return;
  }
  console.log(numOfTriesLeft);
  console.log(randomNumber);
  if (numOfTriesLeft <= 7 && numOfTriesLeft > 0) {
    numOfTriesLeft--;
    numOfTriesUsed++;
    numOfTries.textContent = numOfTriesLeft;
  }

  if (guess > randomNumber) {
    message.textContent = "Number is too high, try again";
  } else if (guess < randomNumber) {
    message.textContent = "Number is too low, try again";
  } else if (Number(guess) === randomNumber) {
    triesMsg.textContent = `It took you ${numOfTriesUsed} tries`;
    numOfTries.textContent = "";
    message.textContent = `${randomNumber} is correct. You win!`;
    return;
  }
  if (numOfTriesLeft <= 0) {
    triesMsg.textContent = "";
    numOfTries.textContent = "";
    message.textContent = `You loose, the number was ${randomNumber}`;
  }
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button

function newGame() {
  //Your code here 1.Reset randomNumber 2. Reset users input field 3.Reset tries, and triesTaken by the user
  randomNumber = getRandomNumber();
  numOfTriesLeft = 7;
  numOfTriesUsed = 0;
  let guess = document.querySelector(".inputs-Values");
  guess.value = "";
  triesMsg.textContent = `Number of tries Left: `;
  numOfTries.textContent = numOfTriesLeft;
  let message = document.querySelector(".final-output");
  message.textContent = `Guess a number between 1 and 100`;
}

// let guess = document.querySelector(".inputs-Values");
// console.log(guess);
//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnNewGame").addEventListener("click", newGame);
document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
