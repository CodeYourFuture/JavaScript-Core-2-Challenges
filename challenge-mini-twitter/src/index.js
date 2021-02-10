// global variables
let txtArea, spanLen, spanTot, btnPost, sxnOutput, tweet;
function setup() {
  txtArea = document.getElementById("input-text");
  spanLen = document.getElementById("count");
  spanTot = document.getElementById("total");
  btnPost = document.getElementById("btn-post");
  sxnOutput = document.querySelector("section.output-area");

  btnPost.disabled = true;
  spanLen.textContent = txtArea.maxLength;
  spanTot.innerHTML = txtArea.maxLength;

  txtArea.addEventListener("input", updateInfo);
  btnPost.addEventListener("click", post);
}

window.onload = setup();

function updateInfo(e) {
  let numChars = e.target.value.length; // number of characters entered
  
  spanLen.textContent = txtArea.maxLength - numChars;
  tweet = e.target.value;
  // control btnPost status based on content size in txtArea
  if (numChars > 0) {
    btnPost.disabled = false;
    const info = document.querySelector("p.info");
    if (numChars === txtArea.maxLength) {
      info.style.color = "red";
    } else {
      info.style.color = "initial";
    }
  } else {
    btnPost.disabled = true;
  }
}

function post(e) {
  e.preventDefault();
  const today = new Date();
  const day = `${today.getDate()}`.padStart(2, "0");
  const month = `${today.getMonth() + 1}`.padStart(2, "0");
  const year = `${today.getFullYear()}`.padStart(2, "0");
  const hour = `${today.getHours()}`.padStart(2, "0");
  const min = `${today.getMinutes()}`.padStart(2, "0");
  const post = 
    `<div class="output">
      <p class="post">${tweet}</p>
      <p class="post-info">Posted on&nbsp;<span>${day}/${month}/${year},</span>&nbsp;at&nbsp;
      <span>${hour}:${min}</span></p>
      </div>`;
  sxnOutput.innerHTML += post;
  reset();
}

function reset() {
  txtArea.value = "";
  document.querySelector("p.info").style.color = "initial";
  btnPost.disabled = true;
  spanLen.textContent = txtArea.maxLength;
}

function deletePost(e) {
  e.target.parentNode.parentNode.parentNode.parentNode.remove();
}