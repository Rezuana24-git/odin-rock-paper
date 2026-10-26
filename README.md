# Rock Paper Scissors

A console-based Rock Paper Scissors game built with JavaScript as part of The Odin Project (JavaScript Basics). You play 5 rounds against the computer, and the winner is announced at the end.

## Live demo

[view the site](https://rezuana24-git.github.io/odin-rock-paper/)

## How to Play

1. Open `index.html` in your browser.
2. Open the browser console (press `F12`, then go to the **Console** tab).
3. A popup will ask for your choice. Type `rock`, `paper` or `scissors` (capitalization doesn't matter).
4. The result of each round is logged in the console.
5. After 5 rounds, the final score and the winner are shown.


## Features

- The computer picks randomly, with an equal chance for rock, paper and scissors.
- Your input is case-insensitive (`rock`, `ROCK` and `RocK` all work).
- The score is tracked across 5 rounds.
- The final result can be a win, a loss or a draw.

## Project Structure

```
.
├── index.html   # Page with instructions to open the console
├── rps.js       # Game logic
└── README.md
```

## Functions

- `getComputerChoice()` - randomly returns `"rock"`, `"paper"` or `"scissors"`.
- `getHumanChoice()` - asks the player for a choice with `prompt` and returns it in lowercase.
- `playGame()` - holds the scores and the `playRound` function, plays 5 rounds in a loop and declares the winner.
  - `playRound(humanChoice, computerChoice)` - compares the two choices, logs the round result and updates the score.

## Known Limitations

- Invalid input (for example, typing "banana") is not handled yet, so the game assumes you always enter a valid choice.
- The game runs in the console. A version with buttons and on-page results is planned for later in the course.

## Technologies

- HTML
- CSS
- JavaScript

## Author

Meseret, [GitHub profile](https://github.com/Rezuana24-git)