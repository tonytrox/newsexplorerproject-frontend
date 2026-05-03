import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home/Home';
import SavedNews from './components/SavedNews/SaveNews';
import PopupRegister from './components/PopupRegister/PopupRegister';
import PopupLogin from './components/PopupLogin/PopupLogin';
import PopupSuccess from './components/PopupSuccess/PopupSuccess';

// agregar getUser al import de MainApi
import { getUser } from '../src/utils/MainApi';

function App() {
  const [cards, setCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);

  // controla si el popup de registro está abierto
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  // estado para controlar si el popup de login está abierto
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // estado para controlar si el popup de éxito está abierto
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  // usuario actual
  const [currentUser, setCurrentUser] = useState(null);

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

  // al montar App, verifica si hay un token guardado en localStorage
  useEffect(() => {
    const checkUser = async () => {
      const token = localStorage.getItem('token');

      if (!token) return;

      try {
        const userData = await getUser(token);
        setCurrentUser(userData); // restaura la sesión
      } catch (error) {
        localStorage.removeItem('token');
      }
    };

    checkUser();
  }, []); // ← [] garantiza que solo se ejecuta una vez al montar

  const handleSaveCard = (card) => {
    if (!savedCards.some((savedCard) => savedCard.title === card.title)) {
      setSavedCards([...savedCards, card]);
    }
  };

  const handleRemoveCard = (card) => {
    setSavedCards(savedCards.filter((savedCard) => savedCard.title !== card.title));
  };

  // CERRAR SESION
  const handleLogout = () => {
    localStorage.removeItem('token'); // elimina el token
    setCurrentUser(null); // resetea el estado → Header vuelve al estado público
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
                currentUser={currentUser}
                onLogout={handleLogout}
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
          onOpenSuccess={() => {
            setIsRegisterOpen(false);
            setIsSuccessOpen(true);
          }}
        />

        <PopupLogin
          isOpen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
          onSwitchToRegister={() => {
            setIsLoginOpen(false);
            setIsRegisterOpen(true);
          }}
          onLogin={async (token) => {
            try {
              const userData = await getUser(token); // llama GET /users/me → { name, email }
              setCurrentUser(userData); // guarda el objeto completo, no solo el token
              setIsLoginOpen(false);
            } catch (error) {
              console.error('Error al obtener usuario:', error);
            }
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
