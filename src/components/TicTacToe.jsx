import React, { useState } from 'react';
import './styles/TicTacToe.css'; // Optional: for styling

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null)); // 3x3 grid, initially null
  const [isXNext, setIsXNext] = useState(true); // Track which player's turn it is
  const [winner, setWinner] = useState(null); // Track winner ('X' or 'O')
  const [xWins, setXWins] = useState(0); // Track wins for X
  const [oWins, setOWins] = useState(0); // Track wins for O

  const handleClick = (index) => {
    // Ignore click if the cell is already filled or if there's a winner
    if (board[index] || winner) return;

    // Copy the board and update the clicked cell
    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);

    // Check for a winner after the move
    checkWinner(newBoard);
    setIsXNext(!isXNext); // Switch turns
  };

  const checkWinner = (board) => {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]); // Set winner ('X' or 'O')
        updateWinCount(board[a]); // Update the win count
        return;
      }
    }

    // Check for a tie
    if (board.every(cell => cell)) {
      setWinner('Tie');
    }
  };

  const updateWinCount = (winner) => {
    if (winner === 'X') {
      setXWins(prev => prev + 1); // Increment X's win count
    } else if (winner === 'O') {
      setOWins(prev => prev + 1); // Increment O's win count
    }
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null)); // Reset the board
    setWinner(null); // Reset winner
    setIsXNext(true); // Reset to X starting
  };

  const handleResetAll = () => {
    setBoard(Array(9).fill(null)); // Reset the board
    setWinner(null); // Reset winner
    setIsXNext(true); // Reset to X starting
    setXWins(0); // Reset X's win count
    setOWins(0); // Reset O's win count
  };

  return (
    <div className="tic-tac-toe">
      <div className="board">
        {board.map((cell, index) => (
          <div
            key={index}
            className="cell"
            onClick={() => handleClick(index)}
          >
            {cell}
          </div>
        ))}
      </div>
      <div className="game-info">
        {winner ? (
          winner === 'Tie' ? (
            <p>The game is a tie!</p>
          ) : (
            <p>{winner} wins!</p>
          )
        ) : (
          <p>Next player: {isXNext ? 'X' : 'O'}</p>
        )}
        <div>
          <p>1st Player Wins: {xWins}</p>
          <p>2st Player Wins: {oWins}</p>
        </div>
        <button onClick={handleReset}>Play Again</button>
        <button onClick={handleResetAll}>Reset All</button>
      </div>
    </div>
  );
}

export default TicTacToe;
