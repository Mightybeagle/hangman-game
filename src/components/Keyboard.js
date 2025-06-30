
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); //split letter by letter to be written to map

function Keyboard ({ guessedLetters, onLetterClick, isdisabled }) {
  return (
    <div className="keyboard">
      {alphabet.map((letter) => ( //write letters to map
        <button className="letterButton" key={letter} onClick={ () => onLetterClick(letter)} disabled={isdisabled || guessedLetters.includes(letter)} style={{fontSize: '61px'}}> 
        {/* each letter gets a button. Disables the keyboard when the game is over using the 'disabled' prop*/}
          {letter}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;
