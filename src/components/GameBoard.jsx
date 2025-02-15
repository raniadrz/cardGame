import React, { useState, useEffect } from 'react';
import Card from './Card';
import './styles/GameBoard.css'; // Optional: for styling
const generateShuffledCards = () => {
  const petImages = [
    "https://spotpet.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fm5ehn3s5t7ec%2F2fuHCYqv7dD3YVJuFXkjLk%2F7a71f9e933de497331924e69df24578d%2FShih_Tzu_Price.webp&w=3840&q=75",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/640px-Cat03.jpg",
    "https://i.pinimg.com/736x/b8/25/e1/b825e1484a21bb183466a3890df21c39.jpg",
    "https://t4.ftcdn.net/jpg/07/18/12/87/360_F_718128776_nJReWqPkf5qF4Y5na8ZqGWAbdCJTpczZ.jpg",
    "https://cdn.i-scmp.com/sites/default/files/d8/images/methode/2021/08/05/7232924c-f50d-11eb-97f9-89051db5b6c1_image_hires_185341.jpg",
    "https://t4.ftcdn.net/jpg/02/53/61/69/360_F_253616948_za22DUrpvoM6aBDyPZxXDXf1OVNZFhL4.jpg",
    "https://www.rainforest-alliance.org/wp-content/uploads/2021/06/green-sea-turtle-1.jpg.optimal.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmA-sh2yoTcJJRefab2GSMangsO0SvbLsNqlMEdQR8ihFro85P06wKrf-9fLl9B3mYRqY&usqp=CAU"
  ];
  
  // Duplicate the images to create pairs
  const doubledCards = [...petImages, ...petImages];
  
  // Shuffle the cards
  return doubledCards.sort(() => Math.random() - 0.5);
};


function GameBoard() {
  const [cards, setCards] = useState(generateShuffledCards());
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (flippedIndices.length === 2) {
      // Check if the two flipped cards match
      const [first, second] = flippedIndices;
      if (cards[first] === cards[second]) {
        setMatchedCards((prev) => [...prev, cards[first]]);
      }
      // Wait for a short delay before flipping the cards back
      setTimeout(() => setFlippedIndices([]), 1000);
      setMoves((prev) => prev + 1); // Increment the move count after every pair check
    }
  }, [flippedIndices, cards]);

  useEffect(() => {
    // If all cards are matched, the game is over
    if (matchedCards.length === cards.length / 2) {
      setGameOver(true);
    }
  }, [matchedCards, cards]);

  const handleCardClick = (index) => {
    if (flippedIndices.length === 2 || flippedIndices.includes(index) || matchedCards.includes(cards[index])) {
      return; // Ignore clicks if already flipped or matched
    }
    setFlippedIndices((prev) => [...prev, index]);
  };

  const handleReset = () => {
    setCards(generateShuffledCards());
    setFlippedIndices([]);
    setMatchedCards([]);
    setMoves(0);
    setGameOver(false);
  };

  return (
    <div className="game-board">
      {cards.map((card, index) => (
        <Card
          key={index}
          card={card}
          onClick={() => handleCardClick(index)}
          isFlipped={flippedIndices.includes(index) || matchedCards.includes(card)}
        />
      ))}
      {gameOver && <div className="game-over">You Win!</div>}
      <div className="game-info">
        <p>Moves: {moves}</p>
        <button onClick={handleReset}>Restart Game</button>
      </div>
    </div>
  );
}

export default GameBoard;
