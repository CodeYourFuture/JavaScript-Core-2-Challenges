let inputVar = document.querySelector(".inputs-Values");
let newBtn = document.querySelector("btnNewGame");
let btnGuess = document.querySelector("btnGuess");
let triesMessage = document.querySelector(".Tries-output");
let message = document.querySelector(".final-output");
let randomNumber = Math.floor(Math.random() * 100 + 1);
let triesLeft = 7;
let numOfTries = 0;
console.log(randomNumber);
triesMessage.textContent = `You Have ${triesLeft} Tries Left`;

function guessNumber() {
    //Collect input from the user
    let guess = document.querySelector(".inputs-Values").value;

    //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
    if (guess < 0 || guess > 100 || guess == "") {
        message.textContent = "Please enter a number between 1 and 100";
    }
    //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
    else if (guess > randomNumber) {
        message.textContent = "try again number to high";
        triesLeft--;
        numOfTries++;
        triesMessage.textContent = `You Have ${triesLeft} Tries Left`;
    }
    //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
    else if (guess < randomNumber) {
        message.textContent = "try again number to low";
        triesLeft--;
        numOfTries++;
        triesMessage.textContent = `You Have ${triesLeft} Tries Left`;
        //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
    } else {
        message.textContent = "Guess is correct. You win!";
        triesMessage.textContent = `You Have ${triesLeft} Tries Left`;
    }
    if (triesLeft === 0 && guess !== randomNumber) {
        message.textContent = "Your Out Of Luck!";
        triesMessage.textContent = `You Have ${triesLeft} Tries Left`;
    }
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
    let guess = document.querySelector(".inputs-Values");
    let message = document.querySelector(".final-output");
    guess.value = "";
    message.textContent = "Please enter a number between 1 and 100";
    triesLeft = 7;
    numOfTries = 0;
    triesMessage.textContent = `You Have ${triesLeft} Tries Left!`;
}
//Your code here
//Reset randomNumber
//Reset users input field
//Reset tries, and triesTaken by the user

//keyboard exception
function keyBoardEvents(e) {
    if (e.keyCode === 13) {
        guessNumber();
    }
}

document.querySelector(".btnNewGame").addEventListener("click", newGame);
document.querySelector(".btnGuess").addEventListener("click", guessNumber);

document.addEventListener("keypress", keyBoardEvents);