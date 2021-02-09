let randomNumber = Math.floor(Math.random() * 100 + 1);
let countDown = 7;
function guessNumber(){
  console.log(randomNumber);
//let output = document.getElementsByClassName("final-output");
let inputNum = document.getElementById("inputValues").value; //Collect input from the user
let output = document.getElementById("outputNum");


let countDownHolder = document.getElementById("counter");
countDown--;
countDownHolder.innerHTML = countDown;
countDownHolder.style.color = "#1092c2";
console.log(countDown);


if (inputNum < 1 || inputNum > 100){
  output.innerHTML = "Please enter a number between 1 and 100";
  
}
else{

  if (inputNum > randomNumber){
        output.innerHTML = "Your guess is too high! Try again";
        output.style.color = "blue";

       }
       else if(inputNum < randomNumber){
         output.innerHTML = "Your guess is too low! Try again";
         output.style.color = "red";
        }

        else{
      output.innerHTML= "Guess is correct. You Win!";
      output.style.color = "green";
    }

}

if(countDown === 0){
   output.innerHTML = `You lose, the number was ${randomNumber}`;
  // output.innerHTML = "You lose, the number was " + randomNumber;
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
document.addEventListener("keypress", keyBoardEvents);
