import React, { useState } from 'react';
import Form from './Form';
import Card from './Card';
import './App.css';

function App() {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className="App">
      <h2>Parcial de Francisco Salari</h2>
      <Form onSubmit={handleFormSubmit} />
      {formData && <Card name={formData.name} color={formData.color} />}
    </div>
  );
}

export default App;