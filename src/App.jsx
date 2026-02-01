import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home/Home';
import SavedNews from './components/SavedNews/SaveNews';

function App() {
  // de esta manera desentralizamos el estado card para compartirlo con otros componentes mediante props
  const [cards, setCards] = useState([]);
  // tarjetas guardadas
  const [savedCards, setSavedCards] = useState([]);

  // Leer datos del localStorage al montar el componente
  useEffect(() => {
    try {
      const savedCardsNews = JSON.parse(localStorage.getItem('savedCards')) || [];
      setSavedCards(savedCardsNews);
    } catch (error) {
      console.error('Error al leer los datos del localStorage:', error);
    }
  }, []);

  // Guardar tarjetas en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('savedCards', JSON.stringify(savedCards));
  }, [savedCards]); // Este efecto se ejecuta cada vez que 'savedCards' cambie

  // Función para guardar una tarjeta
  const handleSaveCard = (card) => {
    if (!savedCards.some((savedCard) => savedCard.title === card.title)) {
      setSavedCards([...savedCards, card]);
    }
  };

  // Función para eliminar una tarjeta
  const handleRemoveCard = (card) => {
    // 'filter' crea un nuevo array. Solo mantiene los elementos que cumplen la condición
    // Quédate solo con las tarjetas cuyo título sea distinto al que quiero borrar.
    setSavedCards(savedCards.filter((savedCard) => savedCard.title !== card.title));
  };

  return (
    <div className="page">
      <div className="page__container">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                cards={cards}
                setCards={setCards}
                savedCards={savedCards}
                onSave={handleSaveCard}
                onRemove={handleRemoveCard}
              />
            }
          />
          <Route
            path="/saved-news"
            element={<SavedNews savedCards={savedCards} onRemove={handleRemoveCard} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
