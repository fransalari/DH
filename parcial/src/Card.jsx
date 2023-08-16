import React from 'react';
import './App.css';

//nombre y color

function Card({ name, color }) {
  return (
    <div className="card">
      <p>Nombre: {name}</p>
      <p>Color: {color}</p>
    </div>
  );
}

export default Card;