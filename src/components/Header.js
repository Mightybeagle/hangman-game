import React from 'react';
import '../index.css';

export default function Header() {
  return (
    <header className='header'> 
      <img src="AlexsHangmanGameLogo.png" width={120} height={120} /> {/* displays little logo I created. */}
      <h1 style={{fontSize: '40px'}}> | Hangman Game </h1>
    </header>
  )
}