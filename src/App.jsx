import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home/Home';
import SavedNews from './components/SavedNews/SaveNews';
import PopupRegister from './components/PopupRegister/PopupRegister';
import PopupLogin from './components/PopupLogin/PopupLogin';
import PopupSuccess from './components/PopupSuccess/PopupSuccess';
import CurrentUserContext from './contexts/CurrentUserContext';

import { getUser, createArticle, deleteArticle } from '../src/utils/MainApi';

function App() {
  const [cards, setCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  // usuario actual
  const [currentUser, setCurrentUser] = useState(null);

  const [keyword, setKeyword] = useState('');

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

  const handleSaveCard = async (article) => {
    const token = localStorage.getItem('token');

    try {
      const savedArticle = await createArticle(token, article);
      setSavedCards([...savedCards, savedArticle]); // agrega el artículo incluyendo su _id
      // SPREAD (...) conserva los anteriores y agrega el nuevo Articulo al final
      // le dice a JavaScript: "abre el array y saca todos sus elementos", para poder
      // meterlos en uno nuevo junto con el artículo recién guardado.
      // resultado: savedCards = [ artículo1, artículo2, artículo3~nuevo ]
    } catch (error) {
      console.error('Error al guardar artículo:', error);
    }
  };

  const handleRemoveCard = async (articleId) => {
    const token = localStorage.getItem('token');

    try {
      await deleteArticle(token, articleId);
      // filtra el artículo eliminado del estado local usando su _id
      setSavedCards(savedCards.filter((card) => card._id !== articleId));
    } catch (error) {
      console.error('Error al eliminar artículo:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // elimina el token
    setCurrentUser(null); // resetea el estado → Header vuelve al estado público
  };

  return (
    // Provider es el componente que hace disponible el valor del contexto a todos sus hijos.
    // Cuando 'currentUser' cambie, todos los componentes que lo usen se actualizarán automáticamente.
    <CurrentUserContext.Provider value={currentUser}>
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
                  onLogout={handleLogout}
                  token={localStorage.getItem('token')}
                  keyword={keyword}
                  setKeyword={setKeyword}
                />
              }
            />
            <Route
              path="/saved-news"
              element={
                <SavedNews
                  savedCards={savedCards}
                  onRemove={handleRemoveCard}
                  currentUser={currentUser}
                  onLogout={handleLogout}
                />
              }
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
    </CurrentUserContext.Provider>
  );
}

export default App;

// App se monta
//     ↓
// savedCards = []  (inicia vacío)
//     ↓
// useEffect lee localStorage
//     ↓
// setSavedCards([...artículosGuardados])  (si había algo)
//     ↓
// usuario guarda un artículo
//     ↓
// setSavedCards([...savedCards, nuevoArticulo])  (agrega al final)
//     ↓
// usuario elimina un artículo
//     ↓
// setSavedCards(savedCards.filter(...))  (quita el eliminado)
