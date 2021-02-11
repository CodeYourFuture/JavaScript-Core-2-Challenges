# The Fastest Presser in the World

Lets create a fun simple game :)

Here is the setup of the game: **Two users compete** about who can **press a key the most times** within a set time!

A user specifies how long time the game should be, and presses **"start game!"**. When the button is pressed it is about pressing either `l` or `s` on the keyboard. The user that has the highest number of keypresses after the time is up, wins 🎉

Here is a gif of how the site should work:

<img alt="homework folder" src="assets/fastest-clicker.gif" width="400" />

You can implement it exactly like you want to, but here is my recommended order:

1. **Create an input and a button in html**. When the button is clicked, get the value of the input. This value will be the amount of time the game should run.
2. **Set a timeout for the time specified by the user.** After that time has run out just log out a simple string.
3. **Create an event listener** so you can call a function **when any key is pressed**. Now get the actual key that was pressed. Was it a `j` or an `i`. We are interested in `s` and `l`. Here google is your friend!
4. **Keep a counter** for how many times `l` and `s` was pressed.
5. **Now put it all together!** After the timeout is done figure out which of the counters is largest. Give some kind of feedback to the users indicating who won.

## Extra features

1. **Start a new game** functionality. Create some functionality so that the users can restart a game.
2. Try and give the site some **styling so it looks nice** :)
3. **Custom feature**. Add something unique to the game! If you dont know how to implement it, just describe what it should do!
4. **Countdown to end of game** - _optional_. Have a countdown that simply counts down until the game is done.

Here are some general things to consider:

- What if a user starts pressing a key before the game is started, what should happen?
- What if the game is a draw? Are both winners? None winners? Maybe indicate to the user that is was a draw.
- What if no time was specified for the game?
- What if there were no key presses before the game ends?

## Confetti

If you wanna give the game some confetti like in the gif, check out [this library](https://www.npmjs.com/package/confetti-js)

Use the library in your page by adding this line before you load your main.js:

`<script src="https://cdn.jsdelivr.net/npm/confetti-js@0.0.13/dist/index.min.js"></script>`
