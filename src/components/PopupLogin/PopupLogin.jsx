import { useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { signin } from '../../utils/MainApi';

const PopupLogin = ({ isOpen, onClose, onSwitchToRegister, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await signin(email, password);

      localStorage.setItem('token', data.token);
      onLogin(data.token);
    } catch (error) {
      setLoginError('Correo o contraseña incorrectos');
    }
  };

  return (
    <PopupWithForm isOpen={isOpen} onClose={onClose}>
      <h2 className="popup__title">Iniciar sesión</h2>

      <form className="popup__form" onSubmit={handleSubmit}>
        <div className="popup__fields">
          <label className="popup__label">
            Correo electrónico
            <input
              className="popup__input"
              type="email"
              placeholder="Introduce tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="popup__label">
            Contraseña
            <input
              className="popup__input"
              type="password"
              placeholder="Introduce tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>

        {loginError && <span className="popup__error">{loginError}</span>}

        <button className="popup__button" type="submit" disabled={!email || !password}>
          Iniciar sesión
        </button>

        <p className="popup__switch">
          o{' '}
          <span className="popup__switch-link" onClick={onSwitchToRegister}>
            Inscribirse
          </span>
        </p>
      </form>
    </PopupWithForm>
  );
};

export default PopupLogin;
