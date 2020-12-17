// Save tweet
let saveBtn = document.querySelector("#saveBtn");

saveBtn.addEventListener("click", function (event) {
	event.preventDefault();
	let tweet = document.querySelector("textarea");
	if (tweet.value.length <= 280) {
		
		let container = document.createElement("article");
		let tweetArea = document.createElement("p");
		// deal with handle if present
		if (tweet.value[0] === '@') {
			let userName = tweet.value.split(" ")[0].slice(1);
			let tweetText = tweet.value.split(" ").slice(1).join(" ");
			tweetArea.innerHTML = tweetText;
			let handle = `<a href="www.twitter.com/${userName}">@${userName}</a>`
			container.innerHTML = handle;
		} else {
			container.innerHTML = "<a></a>"
			tweetArea.innerHTML = tweet.value;
		}
		container.append(tweetArea);
		tweet.value = "";
		document.querySelector("#charNum").innerHTML = "Characters: 0"
		// Create delete button
		let delBtn = document.createElement("button")
		delBtn.innerHTML = "Delete";
		delBtn.classList = "delBtn";
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

