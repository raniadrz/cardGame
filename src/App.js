import React, { useState } from 'react';
import GameBoard from './components/GameBoard'; // Memory Card Game component
import TicTacToe from './components/TicTacToe'; // Tic-Tac-Toe component
import HomePage from './components/HomePage'; // Home page component
import './App.css'; // Optional: for styling

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // Track current page

  const navigateToGame = (gameType) => {
    setCurrentPage(gameType); // Switch to the selected game
  };

  const navigateHome = () => {
    setCurrentPage('home'); // Go back to the home page
  };

  return (
    <div className="app">
      {currentPage === 'home' ? (
        <HomePage onNavigate={navigateToGame} />
      ) : (
        <div className="game-container">
          <button className="back-button" onClick={navigateHome}>
            Back to Home
          </button>
          {currentPage === 'memory' ? <GameBoard /> : <TicTacToe />}
        </div>
      )}
    </div>
  );
}

export default App;
