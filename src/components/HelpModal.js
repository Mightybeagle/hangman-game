import React, { useState } from "react";
import { button, Modal } from 'react-bootstrap';

function HelpModal() {
  const [show, setShow] = useState(false);

  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);


  return (
    <div className="HelpMenu">
      <button onClick={handleOpen}>
        HELP
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title> Rules: </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ol>
            <li>The game will randomly select a word from dictionary.txt (minimum length 5 letters).</li>
            <li>Click the letters on the keyboard to guess.</li>
            <li>The game will confirm if the letter is present by placing it in the position it appears in the word.</li>
            <li>Each incorrect guess will draw a line, getting you closer to hanging the man.</li>
            <li>You have 10 guesses.</li>
            <li>If you complete the word and make fewer than 10 wrong guesses you win. Otherwise the man is hanged, and you lose.</li>
            <li>Click RESET at any point to restart the game.</li>
            <li>Click HELP, to be brought back here incase you need a reminder of the rules!</li>
          </ol>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default HelpModal;

//source - https://react-bootstrap.netlify.app/docs/components/modal/



