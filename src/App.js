import React, { useState } from 'react';
import GameBoard from './components/GameBoard'; // Memory Card Game component
import TicTacToe from './components/TicTacToe'; // Tic-Tac-Toe component
import './App.css'; // Optional: for styling

function App() {
  const [game, setGame] = useState('memory'); // Track the current game

  const switchGame = (gameType) => {
    setGame(gameType); // Switch between 'memory' and 'tic-tac-toe'
  };

  return (
    <div className="app">
      <div className="game-selector">
        <button onClick={() => switchGame('memory')}>Memory Card Game</button>
        <button onClick={() => switchGame('tic-tac-toe')}>Tic-Tac-Toe</button>
      </div>
      
      <div className="game-container">
        {game === 'memory' ? <GameBoard /> : <TicTacToe />}
      </div>
    </div>
  );
}

export default App;
