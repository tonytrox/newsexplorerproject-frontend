import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home/Home';
import SavedNews from './components/SavedNews/SaveNews';
import PopupRegister from './components/PopupRegister/PopupRegister';
import PopupLogin from './components/PopupLogin/PopupLogin';
import PopupSuccess from './components/PopupSuccess/PopupSuccess';
import CurrentUserContext from './contexts/CurrentUserContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

import { getUser, getUserArticles, createArticle, deleteArticle } from '../src/utils/MainApi';

function App() {
  const [cards, setCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const [currentUser, setCurrentUser] = useState(null);

  const [keyword, setKeyword] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const savedCardsNews = JSON.parse(localStorage.getItem('savedCards')) || [];
      setSavedCards(savedCardsNews);
    } catch (error) {
      console.error('Error al leer los datos del localStorage:', error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('savedCards', JSON.stringify(savedCards));
  }, [savedCards]);

  useEffect(() => {
    const checkUser = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        setIsLoading(false);
        return;
      }

      try {
        const userData = await getUser(token);
        setCurrentUser(userData);

        const articles = await getUserArticles(token);
        setSavedCards(articles);
      } catch (error) {
        localStorage.removeItem('token');
      } finally {
        setIsLoading(false);
      }
    };

    checkUser();
  }, []);

  const handleSaveCard = async (article) => {
    const token = localStorage.getItem('token');

    try {
      const savedArticle = await createArticle(token, article);
      setSavedCards([...savedCards, savedArticle]);
    } catch (error) {
      console.error('Error al guardar artículo:', error);
    }
  };

  const handleRemoveCard = async (articleId) => {
    const token = localStorage.getItem('token');

    try {
      await deleteArticle(token, articleId);

      setSavedCards(savedCards.filter((card) => card._id !== articleId));
    } catch (error) {
      console.error('Error al eliminar artículo:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setCurrentUser(null);
    setSavedCards([]);
  };

  return (
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
                <ProtectedRoute
                  element={
                    <SavedNews
                      savedCards={savedCards}
                      onRemove={handleRemoveCard}
                      currentUser={currentUser}
                      onLogout={handleLogout}
                    />
                  }
                  isLoading={isLoading}
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
                const userData = await getUser(token);
                setCurrentUser(userData);

                const articles = await getUserArticles(token);
                setSavedCards(articles);

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
