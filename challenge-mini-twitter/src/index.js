let btnSubmit = document.querySelector("#submit");
let textTyped = document.querySelector("#texts");
let counter = document.querySelector("#textCounter");
btnSubmit.addEventListener("click", tweets);
let timeLine = document.querySelector("#timeline");
let tweetsArr = [];

function tweets(e) {
  e.preventDefault();
  tweetsArr.push(textTyped.value);
  addTweets(tweetsArr);
  textTyped.value = "";
}
function deleteTweet() {}
function addTweets(arr) {
  timeLine.textContent = "";
  arr.forEach((tweet) => {
    let pEl = document.createElement("p");
    pEl.textContent = tweet;
    timeLine.insertBefore(pEl, timeLine.firstChild);
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    pEl.appendChild(deleteBtn);
    deleteBtn.style.marginLeft = "1rem";
    deleteBtn.addEventListener("click", function (event) {
      let indexOfTweet = Array.from(timeLine.children)
        .reverse()
        .indexOf(deleteBtn.parentNode);
      tweetsArr.splice(indexOfTweet, 1);
      addTweets(tweetsArr);
    });
  });
}

textTyped.addEventListener("input", countUpdater);

function countUpdater(event) {
  let tweet = event.target.value;
  let characterCount = tweet.length;
  counter.textContent = characterCount;
  if (characterCount > 280) {
    counter.style.color = "red";
    // btnSubmit.setAttribute('value','disable');
    btnSubmit.disabled = true;
  } else if (characterCount <= 280) {
    counter.style.color = "black";
    btnSubmit.disabled = false;
  }
}
