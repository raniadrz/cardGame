import React from 'react';
import './styles/Card.css'; // Optional: for styling

function Card({ card, onClick, isFlipped }) {
  return (
    <div className="card" onClick={onClick}>
      {isFlipped ? (
        <img src={card} alt="Pet" className="card-content" />
      ) : (
        <div className="card-back"></div>
      )}
    </div>
  );
}

export default Card;
