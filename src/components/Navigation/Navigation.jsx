import './navigation.css';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();
  const isSavedPage = location.pathname === '/saved-news';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="site-navigation">
        <ul className="site-navigation__list">
          <li className="site-navigation__item">
            <NavLink
              to="/"
              className={`site-navigation__link ${isSavedPage && `site-navigation__link--saved`}`}
            >
              Inicio
            </NavLink>
          </li>
          <li className="site-navigation__item">
            <NavLink
              to="/saved-news"
              className={`site-navigation__link ${isSavedPage && `site-navigation__link--saved`}`}
            >
              Artículos guardados
            </NavLink>
          </li>
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
              <li className="site-navigation__item">
                <NavLink
                  to="/saved-news"
                  className="site-navigation__link--mobile"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Artículos guardados
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

export default Navigation;
