// function startGame() {}

function keyBoardEvents(e) {
  if (e.keyCode === 83) {
    // On 'S' Pressed
  } else if (e.keyCode === 76) {
    // On 'L' Pressed
  }
}
document.addEventListener("keypress", keyBoardEvents);
// To stop the confetti from running when the web page loads
confetti.stop();

// Retrieving Elements from the DOM
const input = document.getElementById("seconds-input");
const startGameBtn = document.getElementById("start-game-btn");
const resetGameBtn = document.getElementById("reset-game-btn");
const timeRemainingHeader = document.getElementById("time-remaining-header");
const timeRemainingElem = document.getElementById("time-remaining");
const playerSScore = document.getElementById("player-s-score");
const playerLScore = document.getElementById("player-l-score");
const canvasL = document.getElementById("my-canvasL");
const canvasS = document.getElementById("my-canvasS");
const announce = document.querySelector(".announce");


// Initial values for counters
let counterForL = 0;
let counterForS = 0;

// Assigning a variable and a boolean
let timeRemaining;
let gameIsRunning = false;

// An event listener for 'Start Game' button
startGameBtn.addEventListener("click", function (event) {
  if (!input.value) {
    return alert("Please pick a game time");
  }
  // For the countdown timer to start to appear
  timeRemainingHeader.classList.remove("d-none");

  gameIsRunning = true;
  let gameTime = input.value * 1000;

  timeRemaining = gameTime;

  // Display in seconds for the user
  timeRemainingElem.innerHTML = `${timeRemaining / 1000}`;
  
  // Setting internal for the countdown
  let countdownInterval = setInterval(function () {
    timeRemaining -= 1000;
    timeRemainingElem.innerHTML = `${timeRemaining / 1000}`;

    if (timeRemaining === 0) {
      clearInterval(countdownInterval);
    }
  }, 1000);

  setTimeout(function () {
    gameIsRunning = false;
    resetGameBtn.classList.remove("d-none");
    startGameBtn.classList.add("d-none");
    const link = document.querySelector(".canvas");
    
    // Deciding who the winner is
    if (counterForL > counterForS) {
      announce.classList.remove("d-none");
      announce.innerHTML = `Player Two wins, with a score of ${counterForL}`;
      confetti.start();
      canvasL.style.backgroundColor = "indigo";

// Canvas trick taken from https://stackoverflow.com/questions/2635814/
      var ctx = canvasL.getContext("2d");
      var image = new Image();
      image.src = link.href;
      image.onerror = function() {
        ctx.font = '70px "Vast Shadow"';
        ctx.textAlign = "center";
        ctx.fillStyle = "white";
        ctx.strokeStyle = "white";
        ctx.lineWidth = 4;
        ctx.strokeText = ("Winner!", 200, 120);
        ctx.fillText("Winner!", 200, 120);
      };  
    } else if (counterForL < counterForS) {
        announce.classList.remove("d-none");
        announce.innerHTML = `Player One wins, with a score of ${counterForS}`;
        confetti.start();
        canvasS.style.background = "indigo";
      
// Canvas trick taken from https://stackoverflow.com/questions/2635814/
        var ctx = canvasS.getContext("2d");
        var image = new Image();
        image.src = link.href;
        image.onerror = function() {
          ctx.font = '70px "Vast Shadow"';
          ctx.textAlign = "center";
          ctx.fillStyle = "white";
          ctx.strokeStyle = "white";
          ctx.lineWidth = 4;
          ctx.strokeText = ("Winner!", 200, 120);
          ctx.fillText("Winner!", 200, 120);
        };
      } else {
          announce.classList.remove("d-none");
          announce.innerHTML = `It's a draw, with a score of ${counterForL}`;
        }
    }, gameTime);
  });

// An event listener for the 'Reset Game' button
resetGameBtn.addEventListener("click", function (event) {
  input.value = "";
  playerLScore.innerHTML = 'Score: 0';
  playerSScore.innerHTML = 'Score: 0';
  counterForL = 0;
  counterForS = 0;
  confetti.stop();
  canvasL.style.background = "white";
  canvasS.style.background = "white";
  announce.classList.add("d-none");
  
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






