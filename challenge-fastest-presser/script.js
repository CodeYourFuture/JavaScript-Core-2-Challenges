/* function startGame() {}

function keyBoardEvents(e) {
  if (e.keyCode === 83) {
    // On 'S' Pressed
  } else if (e.keyCode === 76) {
    // On 'L' Pressed
  }
}

document.addEventListener("keypress", keyBoardEvents); */

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

startGameBtn.addEventListener("click", function (event) {
  if (!input.value) {
    return alert("Please pick a game time");
  }

  timeRemainingHeader.classList.remove("d-none");

  gameIsRunning = true;
  let gameTime = input.value * 1000;

  timeRemaining = gameTime;

  // Display in seconds for the user
  timeRemainingElem.innerHTML = `${timeRemaining / 1000}`;

  let countdownInterval = setInterval(function () {
    timeRemaining -= 1000;
    timeRemainingElem.innerHTML = `${timeRemaining / 1000}`;

    if (timeRemaining === 0) {
      clearInterval(countdownInterval);
    }
  }, 1000);

  setTimeout(function () {
    gameIsRunning = false;

    if (counterForL > counterForS) {
      alert(`Time's Up! Player L wins, with a Score of ${counterForL}`);
    } else if (counterForL < counterForS) {
      alert(`Time's Up! Player S wins, with a score of ${counterForS}`);
    } else {
      alert(`It's a draw, with a score of ${counterForL}`);
    }

    resetGameBtn.classList.remove("d-none");
    startGameBtn.classList.add("d-none");
  }, gameTime);
});

resetGameBtn.addEventListener("click", function (event) {
  input.value = "";
  playerLScore.innerHTML = 'Score: 0';
  playerSScore.innerHTML = 'Score: 0';
  

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
    playerSScore.innerHTML = 'Score: ' + ++counterForS;
    console.log(`S Score: ${counterForS}`);
  } else if (event.key.toLowerCase() === "l") {
    playerLScore.innerHTML = 'Score: ' + ++counterForL;
    console.log(`L Score: ${counterForL}`);
  } else {
    console.log("Read the instructions!");
  }
}

var confettiSettings = { target: "my-canvas" };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

