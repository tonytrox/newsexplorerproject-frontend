import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home/Home';
import SavedNews from './components/SavedNews/SaveNews';
import PopupRegister from './components/PopupRegister/PopupRegister';

function App() {
  const [cards, setCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);

  // controla si el popup de registro está abierto
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

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
  }, [savedCards]);

  const handleSaveCard = (card) => {
    if (!savedCards.some((savedCard) => savedCard.title === card.title)) {
      setSavedCards([...savedCards, card]);
    }
  };

  const handleRemoveCard = (card) => {
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
        <PopupRegister
          isOpen={isRegisterOpen}
          onClose={() => setIsRegisterOpen(false)}
          onSwitchToLogin={() => {}}
        />

        {/* botón temporal para abrir el popup y visualizarlo */}
        {/* <button onClick={() => setIsRegisterOpen(true)}>Abrir Register</button> */}
      </div>
    </div>
  );
}

export default App;
