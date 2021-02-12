const inputField = document.getElementById('seconds-input');
const gameStartBtn = document.getElementById('start-game-btn');
const gameResetBtn = document.getElementById('reset-game-btn');
const timeRemainingHeader = document.getElementById('time-remaining-header');
const timeRemainingElem = document.getElementById('time-remaining');
const playerSScore = document.getElementById('player-s-score');
const playerLScore = document.getElementById('player-l-score');

let counterForL = 0;
let counterForS = 0;
let timeRemaining;
let gameIsRunning = false;

function startGame() {
  if (!inputField.value) {
    return alert('Please pick a game time');
  }

  timeRemainingHeader.classList.remove('d-none');

  // game starts
  gameIsRunning = true;
  let gameTime = inputField.value * 1000;

  timeRemaining = gameTime;

  // display time in seconds for player
  timeRemainingElem.innerText = `${timeRemaining / 1000}`;

  let countdownInterval = setInterval(function () {
    timeRemaining -= 1000;
    timeRemainingElem.innerText = `${timeRemaining / 1000}`;

    if (timeRemaining === 0) {
      clearInterval(countdownInterval);
    }
  }, 1000);

  setTimeout(function () {
    gameIsRunning = false;

    if (counterForL > counterForS) {
      console.log(`Player L wins, with a score of ${counterForL}`);
    } else if (counterForL < counterForS) {
      console.log(`Player S wins, with a score of ${counterForS}`);
    } else {
      console.log(`It's a draw, with a score of ${counterForL}`);
    }

    gameResetBtn.classList.remove('d-none');
    gameStartBtn.classList.add('d-none');

  }, gameTime);
}

gameResetBtn.addEventListener('click', function (event) {
  inputField.value = '';
  counterForL = 0;
  counterForS = 0;

  gameResetBtn.classList.add('d-none');
  gameStartBtn.classList.remove('d-none');
  timeRemainingHeader.classList.add("d-none");
});

function keyBoardEvents(e) {
  if (!gameIsRunning) {
    return;
  }

  if (e.keyCode === 83) {
    playerSScore.innerHTML = ++counterForS;
    console.log(`S counter: ${counterForS}`);
    // On 'S' Pressed
  } else if (e.keyCode === 76) {
    // On 'L' Pressed
    playerLScore.innerHTML = ++counterForL;
    console.log(`L counter: ${counterForL}`);
  } else {
    console.log("Read the instructions!");
  }
}

document.addEventListener("keypress", keyBoardEvents);
gameStartBtn.addEventListener('click', startGame)