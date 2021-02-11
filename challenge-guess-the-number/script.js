let randomNumber = Math.floor(Math.random() * 100 + 1);

function guessNumber() {
    //Collect input from the user
    let guess = document.querySelector(".inputs-Values").value;

    //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"

    //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)

    //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)

    //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button

var btnNewGame = document.querySelector('.btnNewGame');
btnNewGame.addEventListener('click', newGame);

function newGame() {
    //Your code here
    console.log('hi ali');
    var userInput = document.querySelector(".inputs-Values");
    var triesTaken = document.querySelector(".Tries-output");
    var tries = document.querySelector(".final-output");
    //Reset randomNumber
    randomNumber = Math.floor(Math.random() * 100 + 1);
    //Reset users input field 
    userInput.value = 0;
    //Reset tries, and triesTaken by the user
    triesTaken.innerHTML = "Number of tries : 10";
    tries.innerHTML = "Guess a number between 1 and 100";
}

//keyboard exception
function keyBoardEvents(e) {
    if (e.keyCode === 13) {
        guessNumber();
    }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);