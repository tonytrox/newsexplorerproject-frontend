import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home/Home';
import SavedNews from './components/SavedNews/SaveNews';
import PopupRegister from './components/PopupRegister/PopupRegister';
import PopupLogin from './components/PopupLogin/PopupLogin';
import PopupSuccess from './components/PopupSuccess/PopupSuccess';

function App() {
  const [cards, setCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);

  // controla si el popup de registro está abierto
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  // estado para controlar si el popup de login está abierto
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // estado para controlar si el popup de éxito está abierto
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

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
                // define la función y la pasa a Home
                onOpenLogin={() => setIsLoginOpen(true)}
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
          onSwitchToLogin={() => {
            setIsRegisterOpen(false);
            setIsLoginOpen(true);
          }}
        />

        <PopupLogin
          isOpen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
          onSwitchToRegister={() => {
            setIsLoginOpen(false);
            setIsRegisterOpen(true);
          }}
        />

        <PopupSuccess
          isOpen={isSuccessOpen}
          onClose={() => setIsSuccessOpen(false)}
          onSwitchToLogin={() => {
            setIsSuccessOpen(false);
            setIsLoginOpen(true);
          }}
        />
      </div>
    </div>
  );
}

export default App;
