/* function startGame() {}

    function keyBoardEvents(e) {
      if (e.keyCode === 83) {
        // On 'S' Pressed
      } else if (e.keyCode === 76) {
        // On 'L' Pressed
      }
    }

    document.addEventListener("keypress", keyBoardEvents);
    */
// all dom elements needed to the project
const input = document.getElementById("seconds-input");
const startGameBtn = document.getElementById("start-game-btn");
const resetGameBtn = document.getElementById("reset-game-btn");
const timeRemainingHeader = document.getElementById("time-remaining-header");
const timeRemainingElem = document.getElementById("time-remaining");
const playerSScore = document.getElementById("player-s-score");
const playerLScore = document.getElementById("player-l-score");

let counterForL = 0;
let counterForS = 0;

let timeRemaining;

let gameIsRunning = false;
// stops user from starting game without putting an input by displaying an alert
startGameBtn.addEventListener("click", function (event) {
  if (!input.value) {
    return alert("Please pick a game time");
  }
  // this removes the display none class
  timeRemainingHeader.classList.remove("d-none");

  gameIsRunning = true;
  // input value is multiplied by 1000 to convert it to milli seconds
  let gameTime = input.value * 1000;
  // the time remaining is the same as the game time
  timeRemaining = gameTime;

  // Display in seconds for the user
  timeRemainingElem.innerHTML = `${timeRemaining / 1000}`;
  // in this time interval, timeremaining is decremented by one every second
  let countdownInterval = setInterval(function () {
    timeRemaining -= 1000;
    timeRemainingElem.innerHTML = `${timeRemaining / 1000}`;
    // when time remaining reaches zero the set interval will be cleared using the Interval id
    if (timeRemaining === 0) {
      clearInterval(countdownInterval);
    }
  }, 1000);

  //
  setTimeout(function () {
    gameIsRunning = false;
    // check if counterL is greater than counterS if so declare playerL as a winner
    if (counterForL > counterForS) {
      let winnerBoardForL = document.createElement("p");
      playerLScore.appendChild(winnerBoardForL);
      winnerBoardForL.innerHTML = `Congratulation! You Won With A Score Of: ${counterForL}`;
    }
    // check if counterL is smaller, if so declare playerS a winner
    else if (counterForL < counterForS) {
      let winnerBoardForS = document.createElement("p");
      playerSScore.appendChild(winnerBoardForS);
      winnerBoardForS.innerHTML = `Player S wins, with a score of ${counterForS}`;
    }
    // declare  both winners
    else {
      let winnerForBoth = document.createElement("p");
      document.body.appendChild(winnerForBoth);
      // styling the result board
      winnerForBoth.style.color = "green";
      winnerForBoth.style.fontSize = "30px";
      winnerForBoth.style.textAlign = "center";
      winnerForBoth.style.transform = "rotate(20deg)";
      winnerForBoth.innerHTML = `It's a draw, with a score of ${counterForL}`;
    }
    // this line of code will make the reset game button appear  by removing the d-none boots strap class
    resetGameBtn.classList.remove("d-none");
    // this line of code will make the start game button disappear by adding the boat strap class d-none
    startGameBtn.classList.add("d-none");
  }, gameTime);
});

// when reset button is clicked the input value field will be cleared and counterS, counterL will be set to zero
resetGameBtn.addEventListener("click", function (event) {
  input.value = "";
  counterForS = 0;
  counterForL = 0;
  // below are styling choices
  resetGameBtn.classList.add("d-none");
  startGameBtn.classList.remove("d-none");
  timeRemainingHeader.classList.add("d-none");
});

document.addEventListener("keypress", onKeypress);

function onKeypress(event) {
  if (!gameIsRunning) {
    return;
  }

  if (event.key.toLowerCase() === "s") {
    playerSScore.innerHTML = ++counterForS;
    console.log(`S counter: ${counterForS}`);
  } else if (event.key.toLowerCase() === "l") {
    playerLScore.innerHTML = ++counterForL;
    console.log(`L counter: ${counterForL}`);
  } else {
    console.log("Read the instructions!");
  }
}

var confettiSettings = { target: "my-canvas" };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();
