//Imports:
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import WordDisplay from "./components/WordDisplay";
import Keyboard from "./components/Keyboard";
import Header from "./components/Header";
import HelpModal from "./components/HelpModal";


function App() {
  //initalise states needed
  const [wordList, setWordList] = useState([])
  const [targetWord, setTargetWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);


  //function to handle guesses
  const handleGuess = (letter) => {
    if(!guessedLetters.includes(letter)) {
      const updatedGuessedLetters = [...guessedLetters, letter] // see source below for the ... (this took a while to find)
      setGuessedLetters(updatedGuessedLetters); 

      if (!targetWord.includes(letter)) {
        setWrongGuesses(prev => prev + 1);
      }
    }
  };


  useEffect(() => {
    fetch("/dictionary.txt") //fetches the file
      .then(res => res.text()) //reads file content
      .then(text => {
        const lines = text.split("\n").slice(38); //splits text line by line. and then removes the first 38 lines ( with the dictionary header info in it)
        const cleanedWords = lines.map(line => line.trim()) //removes spaces and writes to a map
        .filter(word => word.length >= 5); //removes words less than 5 chars long (could be changed to add difficulty functionality)

        setWordList(cleanedWords); //stores the map in the state

        const randomWord = cleanedWords [Math.floor(Math.random() * cleanedWords.length)].toUpperCase(); //picks random word

        setTargetWord(randomWord);
      });
  }, []);


  useEffect (() => { 
    if (wrongGuesses >= 10) { //used to decide if user has finished the game (and display game over)
      setGameOver(true);
    }


    const isWinner = targetWord && [...targetWord].every(letter => guessedLetters.includes(letter)); //checks if the user has guessed every correct letter (and so won)
    if(isWinner) {
      setGameWon(true);
      setGameOver(true);
    }
  }, [guessedLetters, wrongGuesses, targetWord])


  const resetGame = () => { //resets the game (called by RESET button)
    const randomWord = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
    setTargetWord(randomWord);
    setGuessedLetters([]);
    setWrongGuesses(0);
    setGameOver(false);
    setGameWon(false);
  };


  //sources for the above code:
  //https://stackoverflow.com/questions/73127369/how-to-load-a-locally-stored-text-file-in-react-component
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  //https://www.w3schools.com/jsref/jsref_includes.asp
  //https://www.reddit.com/r/reactjs/comments/rm72hn/strategies_for_setting_state_for_nested_arrays/
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
  

  return (
    <div className="App">
      <Header />
      
      <div className='buttons'>
        <button className='restartButton' onClick={resetGame}> RESET </button> 
        <HelpModal />
      </div>

      <div className="winOrLoss"> {/* displays win or loss when the game is over and if loss, what the word was. */}
        <h2> {gameOver ? (gameWon ? "You Won!" : `You Lost. The word was ${targetWord} `) : ""} </h2>
      </div>
      
      <div className='mainGame'>
        <div className='hangingman'>
          <img src={`/hangmandrawings/state${wrongGuesses + 1}.png`} className='hangmanImage' /> {/* Shows hangman */}
          <br />
          { `Wrong Guesses: ${wrongGuesses} out of 10.` }  {/* Shows wrong guesses out of 11 (max before loss) */}
        </div>

        <div className='wordAndKeyboard'>
          {targetWord && 
            <div>
              <WordDisplay word={targetWord} guessedLetters={guessedLetters}  /> {/* Displays the _ _ _ and guessed letters */}
              <br />
              <br />
              <Keyboard guessedLetters={guessedLetters} onLetterClick={handleGuess} isdisabled ={gameOver} /> {/* Displays the keyboard and disables it when the game is over */}
            </div>
          }
        </div>

      </div>
    </div>
  );
}

export default App;
