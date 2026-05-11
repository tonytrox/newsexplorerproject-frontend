import './popupRegister.css';
import { useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { signup } from '../../utils/MainApi';

const PopupRegister = ({ isOpen, onClose, onSwitchToLogin, onOpenSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const [emailError, setEmailError] = useState('');

  const handleEmailBlur = (e) => {
    if (!email) {
      setEmailError('');
      return;
    }

    const emailRegex = /^[^\s@]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      setEmailError('Dirección de correo electrónico no válida');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signup(name, email, password);
      onClose();
      onOpenSuccess();
    } catch (error) {
      setEmailError('Este correo electrónico no está disponible');
    }
  };

  return (
    <PopupWithForm isOpen={isOpen} onClose={onClose}>
      <h2 className="popup__title">Inscribirse</h2>

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
              onBlur={handleEmailBlur}
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

          <label className="popup__label">
            Nombre de usuario
            <input
              className="popup__input"
              type="text"
              placeholder="Introduce tu nombre de usuario"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>

        {emailError && <span className="popup__error">{emailError}</span>}

        <button
          className="popup__button"
          type="submit"
          disabled={!email || !password || !name || emailError}
        >
          Inscribirse
        </button>

        <p className="popup__switch">
          o{' '}
          <span className="popup__switch-link" onClick={onSwitchToLogin}>
            Iniciar sesión
          </span>
        </p>
      </form>
    </PopupWithForm>
  );
};

export default PopupRegister;
