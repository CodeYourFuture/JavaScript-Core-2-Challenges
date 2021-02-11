
  let randomNumber = Math.floor(Math.random() * 100 + 1);
  let outPutEl = document.querySelector(".final-output");
  let trialOutputEl = document.querySelector(".Tries-output")
  let playGame = true;
  let gameOver = false;
  let counter = 7;
  let triesTaken = 0;
  let numberOfTries;

  function guessNumber() {
    //Collect input from the user

    if (playGame) {
      let guess = document.querySelector(".inputs-Values").value;

      if (guess <= 0 || guess === "" || guess > 100) {
        outPutEl.innerHTML = `Please enter a number between 1 and 100`;
      } else if (guess > randomNumber) {
        counter -= 1;
        triesTaken += 1;
        outPutEl.innerHTML = `Number is too high, try again.`;
        numberOfTries = trialOutputEl.innerHTML = `Number of tries: ${counter}`;
      } else if (guess < randomNumber) {
        counter -= 1;
        triesTaken += 1;
        outPutEl.innerHTML = `Number is too low, try again.`;
        numberOfTries = trialOutputEl.innerHTML = `Number of tries: ${counter}`;
      } else {
        counter -= 1;
        triesTaken += 1;
        outPutEl.innerHTML = `Congratulations!!! ${guess} is the correct number. You win!`;
        numberOfTries = trialOutputEl.innerHTML = `It took you ${triesTaken} guess(es)`;
        playGame = gameOver;
      }

      if (counter === 0 && guess !== randomNumber) {
        numberOfTries = numberOfTries = trialOutputEl.innerHTML = `Ohh no you lose, the number was ${randomNumber}`;
        outPutEl.innerHTML = "";
        playGame = gameOver;
      }
    }
  }

  function newGame() {
    counter = 7;
    triesTaken = 0;
    randomNumber = Math.floor(Math.random() * 100 + 1);
    guess = document.querySelector(".inputs-Values").value = "";
    numberOfTries = trialOutputEl.innerHTML = `Number of tries: ${counter}`;
    outPutEl.innerHTML = "Get a number between 1 and 100";
    playGame = true;
  }

  //keyboard exception
  function keyBoardEvents(e) {
    if (e.keyCode === 13) {
      guessNumber();
    }
  }

  document.querySelector(".btnGuess").addEventListener("click", guessNumber);
  document.querySelector(".btnNewGame").addEventListener("click", newGame);
  document.addEventListener("keypress", keyBoardEvents);


