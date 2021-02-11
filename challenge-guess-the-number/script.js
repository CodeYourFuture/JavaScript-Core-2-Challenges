// global variables
let randomNumber = Math.floor(Math.random() * 100 + 1);

let btnNewGame = document.getElementById("btnNewGame");
let inputValues = document.getElementById("inputs-Values");
let btnGuess = document.getElementById("btnGuess");
let container = document.querySelector(".container");
let guessMessage = document.createElement("p");
let numOfClicks = 0;

function guessNumber() {
  //numOfClicks++;
  //Collect input from the user

  let guess = inputValues.value;
  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)

  if (guess == 0 || guess === "" || guess > 100 || guess < 0) {
    guessMessage.innerHTML = "Please enter a number between 1 and 100";
    guessMessage.style.background = "#ff7770";
    guessMessage.style.color = "white";
    guessMessage.style.textAlign = "center";
    container.appendChild(guessMessage);
  } else if (numOfClicks >= 7) {
    guessMessage.innerHTML = `You loose the random number was ${randomNumber}`;
    guessMessage.style.background = "blue";
    guessMessage.style.color = "white";
    guessMessage.style.textAlign = "center";
    container.appendChild(guessMessage);
  } else {
    numOfClicks++; // the counter gives the user 1 more try
    if (guess > randomNumber) {
      guessMessage.innerHTML = "Number is too high,try again";
      guessMessage.style.background = "#8B008B";
      guessMessage.style.color = "white";
      guessMessage.style.textAlign = "center";
      container.appendChild(guessMessage);
    } else if (guess < randomNumber) {
      guessMessage.innerHTML = "Number is too low, try again";
      guessMessage.style.background = "pink";
      guessMessage.style.color = "white";
      guessMessage.style.textAlign = "center";
      container.appendChild(guessMessage);
    } else {
      guessMessage.innerHTML = `Guess is correct, you win!, it took you ${numOfClicks} tries`;
      guessMessage.style.background = "green";
      guessMessage.style.color = "white";
      guessMessage.style.textAlign = "center";
      container.appendChild(guessMessage);
    }
  }


}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button

//var btnNewGame = document.querySelector('.btnNewGame');
btnNewGame.addEventListener("click", newGame);

function newGame() {
  //Your code here

  var userInput = document.querySelector(".inputs-Values");
  var triesTaken = document.querySelector(".Tries-output");
  var tries = document.querySelector(".final-output");
  //Reset randomNumber
  randomNumber = Math.floor(Math.random() * 100 + 1);
  //Reset users input field
  userInput.value = 0;
  //Reset tries, and triesTaken by the user
  //  triesTaken.innerHTML = "Number of tries : 10";
  tries.innerHTML = "Guess a number between 1 and 100";
  guessMessage.innerHTML = "";
  //   randomNumber = Math.floor(Math.random() * 100 + 1);
  //   inputValues.value = "";
  numOfClicks = 0;
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

btnNewGame.addEventListener("click", newGame);
document.addEventListener("keypress", keyBoardEvents);
