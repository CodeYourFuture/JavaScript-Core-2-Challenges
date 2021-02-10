let randomNumber = Math.floor(Math.random() * 100 + 1);
let outPutEl = document.querySelector( ".final-output" );
let numberOfTriesEl = document.querySelector( ".Tries-output" );
let numberOfTries = 7;
let isGamePlaying = false;
let guess;
let numberOfTriesTaken = 0;
function guessNumber()
{
  if ( !isGamePlaying )
  {
    //Collect input from the user
     guess = document.querySelector( ".inputs-Values" ).value;
    //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
    if ( guess <= 0 || guess === "" || guess > 100 )
    {
      outPutEl.innerHTML = "Please enter a number between 1 and 100"
    }
    //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
    else if ( guess > randomNumber )
    {
      outPutEl.innerHTML = "Number is too high, try again"
      numberOfTries--
      numberOfTriesTaken ++
      numberOfTriesEl.innerHTML = `Number of Tries: ${ numberOfTries } `
    }
    //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
    else if ( guess < randomNumber )
    {
      numberOfTries--
      numberOfTriesTaken ++
      numberOfTriesEl.innerHTML = `Number of Tries: ${ numberOfTries } `
      outPutEl.innerHTML = "Number is too low, try again"
    }
    //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
    else
    {
      numberOfTriesTaken ++
      outPutEl.innerHTML = `${ randomNumber } Guess is correct. You win!`;
      numberOfTriesEl.innerHTML = `It took you ${ numberOfTriesTaken } tries`
    }
    if ( numberOfTries === 0 && guess !== randomNumber )
    {
      numberOfTriesEl.innerHTML = `you loose,the number was: ${ randomNumber }`
      outPutEl.innerHTML = "";
      isGamePlaying = false;
    }
  }
}
// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  outPutEl.innerHTML = "Please enter a number between 1 and 100";
  //Reset randomNumber
  randomNumber = Math.floor(Math.random() * 100 + 1);
  //Reset users input field
  guess = document.querySelector( ".inputs-Values" ).value = "";
  //Reset tries, and triesTaken by the user
  numberOfTries = 7;
  numberOfTriesTaken = 0;
  numberOfTriesEl.innerHTML = `Number of Tries: ${ numberOfTries } `;
  isGamePlaying = false;
}
//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}
document.querySelector( ".btnGuess" ).addEventListener( "click", guessNumber );
document.querySelector( ".btnNewGame" ).addEventListener( "click", newGame );
document.addEventListener("keypress", keyBoardEvents);


