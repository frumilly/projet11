// Rating.jsx
import React from 'react';
import './Rating.module.css'; // Importez le fichier CSS

function Rating({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const starClass = i <= rating ? 'star-full' : '';
    stars.push(
      <span key={i} className={`star ${starClass}`}>&#9733;</span>
    );
  }

  return (
    <div className="rating">
      {stars}
    </div>
  );
}

export default Rating;
