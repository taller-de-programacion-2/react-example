import React from 'react';
import './Card.css';

function Card({ icon, title, children }) {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <div className="card-title">{title}</div>
      { children }
    </div>
  );
}

export default Card;