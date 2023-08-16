import React, { useState } from 'react';
import './App.css';

// Form

function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  //Validación solicitada
  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim().length < 3 || /^\s/.test(name) || color.length < 6) {
      setErrorMessage('Por favor chequea que la información sea correcta. Nombre con más de 3 letras y Color maoyr a 6 letras');
    } else {
      setErrorMessage('');
      onSubmit({ name, color });
    }
  };

  // A continuación muestro los datos

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input type="text" placeholder="Ingrese su nombre" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="color">Color:</label>
        <input type="text" placeholder="Ingrese su Color" id="color" value={color} onChange={handleColorChange} />
      </div>
      <button type="submit">Enviar</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  );
}

export default Form;