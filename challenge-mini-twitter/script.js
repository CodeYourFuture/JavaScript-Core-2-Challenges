let timeLine = document.querySelector("#timeline");
let counter = document.querySelector("#textCounter");
let submitBtn = document.querySelector("#submit");
let tweetsArr = [];

function tweets(event) {
  event.preventDefault();
  let textArea = document.querySelector("#texts");
  tweetsArr.push(textArea.value);
  postTweets(tweetsArr);
  textArea.value = "";
  counter.textContent = 0;
}

function postTweets(arr) {
  timeLine.innerHTML = "";
  console.log(arr);
  let newArr = [...arr];
  newArr.reverse().forEach((post, index) => {
    let postHtml = `<div class="post">
    <p>${post}</p>
    <button id= "delete${index}">delete</button>
    </div>`;
    timeLine.innerHTML += postHtml;
    let deleteBtn = document.querySelector(`#delete${index}`);
    deleteBtn.addEventListener("click", deleteTweet);
  });
}
function deleteTweet(event) {
  let test = event.target;
  console.log(event.target);
  console.log(event.currentTarget);
  let parentEl = event.target.parentElement;
  timeLine.removeChild(parentEl);
}
function characterCount(event) {
  let characterLength = event.target.value.length;
  counter.textContent = characterLength;
  if (characterLength >= 280) {
    counter.style.color = "red";
    submitBtn.disabled = true;
  } else {
    counter.style.color = "black";
    submitBtn.disabled = false;
  }
}
document.querySelector("#texts").addEventListener("input", characterCount);
submitBtn.addEventListener("click", tweets);
