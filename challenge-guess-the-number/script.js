let randomNumber = Math.floor(Math.random() * 100 + 1);
let countDown = 7;

function guessNumber() {
  let inputNum = document.getElementById("inputValues").value; //Collect input from the user
  let output = document.getElementById("outputNum");

  let countDownHolder = document.getElementById("counter");
  if (countDown > 0) {
    countDown--;
  }
  countDownHolder.innerHTML = countDown;
  countDownHolder.style.color = "#1092c2";

  if (inputNum < 1 || inputNum > 100) {
    output.innerHTML = "Please enter a number between 1 and 100";
  } else {
    if (inputNum > randomNumber) {
      output.innerHTML = "Your guess is too high! Try again";
      output.style.color = "blue";
    } else if (inputNum < randomNumber) {
      output.innerHTML = "Your guess is too low! Try again";
      output.style.color = "red";
    } else {
      output.innerHTML = "Guess is correct. You Win!";
      output.style.color = "green";
      document.querySelector(".btnGuess").disabled = true;
    }
  }

  if (countDown === 0) {
    output.innerHTML = `You lose, the number was ${randomNumber}`;
    document.querySelector(".btnGuess").disabled = true;
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
  countDown = 7;
  randomNumber = Math.floor(Math.random() * 100 + 1);
  document.querySelector(".btnGuess").disabled = false;
  let inputField = document.getElementById("inputValues");
  inputField.value = "";
  let numOfTries = document.getElementById("counter");
  numOfTries.innerHTML = countDown;
  let outputNum = document.getElementById("outputNum");
  outputNum.innerHTML = "Guess a number between 1 and 100";

  outputNum.style.color = "black";

  //Your code here
  //Reset randomNumber
  //Reset users input field
  //Reset tries, and triesTaken by the user
}

let newGameBtn = document.getElementById("New-game-Btn"); // getting the new game button
newGameBtn.addEventListener("click", newGame);

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
