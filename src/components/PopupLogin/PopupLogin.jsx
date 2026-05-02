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
      // data.token = el JWT que nos devuelve el backend
      localStorage.setItem('token', data.token); // guarda el token
      onLogin(data.token); // le dice a App "ya hay un usuario conectado"
      // onClose(); // cierra el popup
    } catch (error) {
      // credenciales incorrectas u otro error
      setLoginError('Correo o contraseña incorrectos');
    }
  };

  return (
    <PopupWithForm isOpen={isOpen} onClose={onClose}>
      {/* título */}
      <h2 className="popup__title">Iniciar sesión</h2>

      {/* campos del formulario */}
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

        {/* muestra el error solo si existe */}
        {loginError && <span className="popup__error">{loginError}</span>}

        {/* botón submit */}
        <button className="popup__button" type="submit" disabled={!email || !password}>
          Iniciar sesión
        </button>

        {/* enlace para cambiar a Register */}
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
