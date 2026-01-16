import './header.css';
import Navigation from '../Navigation/Navigation';
import { useLocation, NavLink } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const isSavedPage = location.pathname === '/saved-news';

  return (
    <header className={`header ${isSavedPage && 'header--saved'}`}>
      <h1 className={`header__title ${isSavedPage && 'header__title--saved'}`}>
        <NavLink to="/" className="header__logo-link">
          NewsExplorer
        </NavLink>
      </h1>
      <Navigation />
    </header>
  );
}

export default Header;
