import './navigation.css';
import { NavLink } from 'react-router';

function Navigation() {
  return (
    <nav className="site-navigation">
      <ul className="site-navigation__list">
        <li className="site-navigation__item">
          <NavLink to="/" className="site-navigation__link">
            Inicio
          </NavLink>
        </li>
        <li className="site-navigation__item">
          <NavLink to="/saved-news" className="site-navigation__link">
            Artículos guardados
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
