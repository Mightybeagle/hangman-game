# hangman-game:
Welcome to Alex's Hangman Game. Built in react, as the implementation of the classic word game. This is to fulfil the requirement of Task 21 of the HyperionDev Course


## Rules:
In case you're unfamiliar with the rules of Hangman.
1. The game will randomly select a word from dictionary.txt (minimum length 5 letters).
2. Click the letters on the keyboard to guess.
3. The game will confirm if the letter is present by placing it in the position it appears in the word.
4. Each incorrect guess will draw a line, getting you closer to hanging the man.
5. You have 10 guesses.
6. If you complete the word and make fewer than 10 wrong guesses you win. Otherwise the man is hanged, and you lose.
7. Click RESET at any point to restart the game.
8. Click HELP, to be brought back here incase you need a reminder of the rules!


## Installation: 
1. Clone the Repo:
   `git clone https://github.com/Mightybeagle/hangman-game.git`
2. Navigate into the directory
   `cd hangman-game`
3. Install dependencies:
   `npm install`
> NOTE: as per previous instruction, the `node_modules` folder will not be included. Run the above to install it.


## Usage:
1. Run the following inside the folder to start running it locally:
   `npm start`
2. It should automatically launch: http://localhost:3000/ in your browser
