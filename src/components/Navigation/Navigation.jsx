import './navigation.css';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';

// recibe la prop y lo envia a la accion: onClick={}
function Navigation({ onOpenLogin, onLogout }) {
  const location = useLocation();
  const currentUser = useContext(CurrentUserContext);
  const isSavedPage = location.pathname === '/saved-news';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="site-navigation">
        <ul className="site-navigation__list">
          <li className="site-navigation__item">
            <NavLink
              to="/"
              className={`site-navigation__link ${isSavedPage && `site-navigation__link-saved`}`}
            >
              Inicio
            </NavLink>
          </li>
          {/* OPERADOR TERNARIO: */}
          {/* {currentUser ? <NavAutenticada /> : <NavPublica />} */}
          {currentUser ? (
            <>
              <li className="site-navigation__item site-navigation__item--link">
                <NavLink
                  to="/saved-news"
                  className={`site-navigation__link ${isSavedPage && `site-navigation__link-saved`}`}
                >
                  Artículos guardados
                </NavLink>
              </li>
              <li className="site-navigation__item">
                <button
                  className={`site-navigation__buttom ${isSavedPage && `site-navigation__buttom-logout`}`}
                  onClick={onLogout}
                >
                  {currentUser.name}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 6L6 6L6 18H10V20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H10V6ZM17.5856 13L13.2927 17.1339L14.707 18.4958L21.4141 12.0371L14.707 5.57837L13.2927 6.9402L17.5856 11.0741H8V13H17.5856Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </li>
            </>
          ) : (
            <li className="site-navigation__item">
              <button
                className="site-navigation__buttom site-navigation__buttom-login"
                onClick={onOpenLogin}
              >
                Iniciar sesión
              </button>
            </li>
          )}
        </ul>
      </nav>

      <button
        className={`site-navigation__hamburger ${isSavedPage && 'site-navigation__hamburger--saved'}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M13.4144 12.0001L18.7073 17.293L17.293 18.7072L11.293 12.7072C10.9025 12.3167 10.9025 11.6835 11.293 11.293L17.293 5.29297L18.7073 6.70718L13.4144 12.0001Z"
              fill="currentColor"
            />
            <path
              d="M10.8786 12.0001L5.58571 17.293L6.99992 18.7072L12.9999 12.7072C13.3904 12.3167 13.3904 11.6835 12.9999 11.293L6.99992 5.29297L5.58571 6.70718L10.8786 12.0001Z"
              fill="currentColor"
            />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="8" width="16" height="2" fill="currentColor" />
            <rect x="4" y="14" width="16" height="2" fill="currentColor" />
          </svg>
        )}
      </button>

      {isMenuOpen && (
        <div className="site-navigation__overlay">
          <nav className="site-navigation__mobile">
            <ul className="site-navigation__list site-navigation__list--mobile">
              <li className="site-navigation__item">
                <NavLink
                  to="/"
                  className="site-navigation__link--mobile"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inicio
                </NavLink>
              </li>

              {currentUser ? (
                <>
                  <li className="site-navigation__item">
                    <NavLink
                      to="/saved-news"
                      className="site-navigation__link--mobile"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Artículos guardados
                    </NavLink>
                  </li>
                  <li className="site-navigation__item">
                    <button
                      className="site-navigation__link--mobile"
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                      onClick={() => {
                        setIsMenuOpen(false);
                        onLogout();
                      }}
                    >
                      {currentUser.name}
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        style={{ marginLeft: '8px', verticalAlign: 'middle' }}
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 6L6 6L6 18H10V20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H10V6ZM17.5856 13L13.2927 17.1339L14.707 18.4958L21.4141 12.0371L14.707 5.57837L13.2927 6.9402L17.5856 11.0741H8V13H17.5856Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </li>
                </>
              ) : (
                <li className="site-navigation__item">
                  <NavLink
                    to="/"
                    className="site-navigation__link--mobile"
                    onClick={() => {
                      setIsMenuOpen(false);
                      onOpenLogin();
                    }}
                  >
                    Iniciar sesión
                  </NavLink>
                </li>
              )}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

export default Navigation;
