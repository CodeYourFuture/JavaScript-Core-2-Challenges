// Save tweet
let saveBtn = document.querySelector("#saveBtn");

saveBtn.addEventListener("click", function (event) {
	event.preventDefault();
	let tweet = document.querySelector("textarea");
	if (tweet.value.length <= 280) {
		// Create tweet
		let container = document.createElement("div");
		let tweetArea = document.createElement("p");
		tweetArea.innerHTML = tweet.value;
		container.append(tweetArea);
		tweet.value = "";
		// Create delete button
		let delBtn = document.createElement("button")
		delBtn.innerHTML = "Delete";
		delBtn.addEventListener("click", function(){
			this.parentNode.parentNode.removeChild(this.parentNode);
		})
		container.append(delBtn);
		document.querySelector("#tweets").append(container);
	}
});

// Character counter
document.querySelector("textarea").addEventListener("input", function (event) {
	let chars = event.target.value.length;
	document.querySelector("#charNum").innerHTML = "Characters: " + chars;
	if (chars > 280) {
		document.querySelector("#charNum").style.color = "red";
	} else {
		document.querySelector("#charNum").style.color = "black";
	}
});

