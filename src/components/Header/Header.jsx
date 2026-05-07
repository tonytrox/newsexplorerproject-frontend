import './header.css';
import Navigation from '../Navigation/Navigation';
import { useLocation, NavLink } from 'react-router-dom';

// recibe la prop desde el componente Home
function Header({ onOpenLogin, onLogout }) {
  const location = useLocation();
  const isSavedPage = location.pathname === '/saved-news';

  return (
    <header className={`header ${isSavedPage && 'header--saved'}`}>
      <h1 className={`header__title ${isSavedPage && 'header__title--saved'}`}>
        <NavLink to="/" className="header__logo-link">
          NewsExplorer
        </NavLink>
      </h1>
      {/* pasa onOpenLogin a Navigation */}
      <Navigation onOpenLogin={onOpenLogin} onLogout={onLogout} />
    </header>
  );
}

export default Header;
