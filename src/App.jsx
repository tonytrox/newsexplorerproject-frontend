import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home/Home';
import SavedNews from './components/SavedNews/SaveNews';

function App() {
  // de esta manera desentralizamos el estado card para compartirlo con otros componentes mediante props
  const [cards, setCards] = useState([]);

  // Leer datos del localStorage al montar el componente
  useEffect(() => {
    try {
      const savedCards = JSON.parse(localStorage.getItem('cards'));
      if (savedCards) {
        setCards(savedCards); // Si hay datos, actualizamos el estado
      }
    } catch (error) {
      console.error('Error al leer los datos del localStorage:', error);
    }
  }, []);

  useEffect(() => {
    if (cards.length > 0) {
      localStorage.setItem('cards', JSON.stringify(cards)); // Guardar datos en el localStorage
    }
  }, [cards]); // Este efecto se ejecuta cada vez que 'cards' cambie

  return (
    <div className="page">
      <div className="page__container">
        <Routes>
          <Route path="/" element={<Home cards={cards} setCards={setCards} />} />
          <Route path="/saved-news" element={<SavedNews cards={cards} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
