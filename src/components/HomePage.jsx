// HomePage.js
import React from 'react';
import './styles/HomePage.css'; // Optional: for styling

function HomePage({ onNavigate }) {
  return (
    <div className="home-page">
      <h1>Welcome to the Fun Games App!</h1>
      <p>Select a game to start playing:</p>
      <div className="game-buttons">
        <button onClick={() => onNavigate('memory')}>Memory Card Game</button>
        <button onClick={() => onNavigate('tic-tac-toe')}>Tic-Tac-Toe</button>
      </div>
    </div>
  );
}

export default HomePage;
