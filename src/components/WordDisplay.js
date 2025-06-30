
function WordDisplay({ word, guessedLetters }) { //gets passed the word and the letters guessed
  return (
    <div className="wordDisplay" style={{fontSize: '80px'}}> 
      {word.split("").map((letter, index) => ( //splits word letter by letter
        <span key={index} className="letter">
          {guessedLetters.includes(letter) ? letter : "_"} {/* If the letter is found, then it writes it in replaces it with the letter, otherwise it shows _ */}
        </span>
      ))}
    </div>
  );
}

export default WordDisplay;