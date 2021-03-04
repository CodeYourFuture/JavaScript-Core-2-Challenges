let randomNumber = Math.floor(Math.random() * 100 + 1);
let inputVar = document.querySelector(".inputs-Values");
let guessBtn = document.querySelector("btnGuess")
let triesVar = document.querySelector(".Tries-output");
let newBtn = document.querySelector(".btnNewGame");
let triVal = 7;
triesVar.value = `Number of Tries: ${triVal}`;


// console.log(randomNumber);
function guessNumber() {
  if (triVal <= 7 && triVal > 1) {
    //Collect input from the user
    let guess = +document.querySelector(".inputs-Values").value;

    let guessed = false;
    //If the user inputs a bad input ie 0, empty string, number greater that 100, 
    //number less than zero Print "Please enter a number between 1 and 100"
    if (guess === 0 || guess === "" || guess > 100 || guess < 0) {
      console.log("please enter number btw 1 and 100");
      triVal--;
      triesVar.value = `Number of Tries: ${triVal}`;
      //If the users guess is higher than the random number print Number is too high, 
      //try again (hint use .final-out class to print)
    } else if (guess > randomNumber) {
      console.log("Number is too high");
      // document.write("The number is too high, think smaller");
      // guessed = false;
      triVal--;
      triesVar.value = `Number of Tries: ${triVal}`;
      //If the users guess is lower than the random number print Number is too low, 
      //try again  (hint use .final-out class to print)
    } else if (guess < randomNumber) {
      // document.write("The number is too low, think bigger");
      // guessed = false;
      console.log("Number is too low");
      triVal--;
      triesVar.value = `Number of Tries: ${triVal}`;
      //If the user has guessed the random number correctly p rint out the randomNumber with 
      //a message "Guess is correct. You win!"
    } else {
      // alert("Guess is correct. You win!");
      // guessed = true;
      console.log("You win");
    }

  } else {
    console.log("game over")
  }
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  //Reset randomNumber
  //Reset users input field
  //Reset tries, and triesTaken by the user

  // newBtn.addEventListener("click", resetFunc);
  // function resetFunc(){
  inputVar.value = "";
  triVal = 7;
  triesVar.value = `Number of Tries: ${triVal}`;
  randomNumber = Math.floor(Math.random() * 100 + 1);
  // guessBtn = randomNumber;
  // }
}


//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}
newBtn.addEventListener("click", newGame);
document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);

// console.log(reem);
// console.log(33);
// console.log(yellow);
