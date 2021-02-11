let randomNumber = Math.floor(Math.random() * 100 + 1);
let output = document.querySelector(".final-output");
let toutput = document.querySelector(".Tries-output")
let tries = 7;                                        //Reset tries, and triesTaken by the user
let triesTaken = 0;

function guessNumber() {
  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;


  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
if (guess <= 0 || guess > 100){
	output.innerHTML = "Please enter a number between 1 and 100";
}
  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
  else if (guess > randomNumber) {
    output.innerHTML = "Number is too high, try again";
    tries -= 1;
    triesTaken += 1;
    toutput.innerHTML="Number of tries " + tries;
  }			
  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
  else if (guess < randomNumber) {
    output.innerHTML="Number is too low, try again.";
    tries -= 1;
    triesTaken += 1;
    toutput.innerHTML="Number of tries " + tries;
  }
  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
  else {
   	output.innerHTML="Guess is correct. You win!";
    toutput.innerHTML=`It took you ${triesTaken} number of tries`;
  }  
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button

function newGame() {

 output.innerHTML = "Please enter a number  between 1 and 100";
  randomNumber = Math.floor(Math.random() * 100 + 1);       //Reset randomNumber
  document.querySelector(".inputs-Values").value = "";      //Reset users input field
  // console.log(randomNumber);
  
  // numberOfTriesEl.innerHTML = `Number of tries: ${numberOfTries}`;
}


//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

// Event listeners
document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.querySelector(".btnNewGame").addEventListener("click", newGame);
document.addEventListener("keypress", keyBoardEvents);
