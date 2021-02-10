let randomNumber = Math.floor(Math.random() * 100 + 1);
let userInput;
let div;
let finalOutput = document.querySelector(".final-output")
let triesOutput = document.querySelector(".Tries-output");
let guessCount = 0;
let isGamePlaying = false;
let numberOfTriesTaken = 0;

function guessNumber() {
  if ( !isGamePlaying ) {
   userInput = document.querySelector(".inputs-Values").value;
if (userInput <= 0 || userInput > 100 || userInput === "") {
   finalOutput.innerText = "Please enter a number between 1 and 100";
  } 
  else if (userInput > randomNumber) 
  {
     guessCount ++;
     numberOfTriesTaken ++;
     finalOutput.innerText = "Number is too high, try again";
     triesOutput.innerText = `Number of tries: ${guessCount}`;
  } 
  else if (userInput < randomNumber) 
  {
     guessCount ++;
     numberOfTriesTaken ++;
     finalOutput.innerText = "Number is too low, try again";
     triesOutput.innerText = `Number of tries: ${guessCount}`;
  } 
else 
{
   guessCount ++;
   numberOfTriesTaken ++;
   div = document.querySelector(".center").style.backgroundColor = "green";
   finalOutput.innerText = `Guess is correct. You win! Number was ${randomNumber}`;
   triesOutput.innerText = `It took you ${guessCount} tries`;
}

if (guessCount === 7 && userInput !== randomNumber) {
   div = document.querySelector(".center").style.backgroundColor = "red";
  triesOutput.innerText = `You loose, number was ${randomNumber}`;
  finalOutput.innerText = "";
  isGamePlaying = false;

}
}
};

//Collect input from the user

//If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
//If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
//If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
//If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"


// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button

let newGameBtn = document.querySelector(".btnNewGame");
function newGame() {
  div = document.querySelector(".center").style.backgroundColor = "white";
  finalOutput.innerText = "Please enter a number between 1 and 100";
  randomNumber = Math.floor(Math.random() * 100 + 1);
  userInput = document.querySelector(".inputs-Values").value = "";
  guessCount = 0;
  numberOfTriesTaken = 0;
  triesOutput.innerText = `Number of Tries: ${guessCount} `;
  isGamePlaying = false;

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
newGameBtn.addEventListener("click", newGame);
document.addEventListener("keypress", keyBoardEvents);


