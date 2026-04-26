import { useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import './popupRegister.css';

const PopupRegister = ({ isOpen, onClose, onSwitchToLogin }) => {
  // estado para cada campo del formulario
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const [emailError, setEmailError] = useState('');

  // valida el email en tiempo real
  const handleEmailBlur = (e) => {
    if (!email) {
      setEmailError('');
      return;
    }

    const emailRegex = /^[^\s@]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // .test() evalúa si el string cumple con el patrón regex
    if (!emailRegex.test(email)) {
      setEmailError('Dirección de correo electrónico no válida');
    } else {
      setEmailError('');
    }
  };

  return (
    <PopupWithForm isOpen={isOpen} onClose={onClose}>
      {/* título */}
      <h2 className="popup__title">Inscribirse</h2>

      {/* campos del formulario */}
      <form className="popup__form">
        <div className="popup__fields">
          <label className="popup__label">
            Correo electrónico
            <input
              className="popup__input"
              type="email"
              placeholder="Introduce tu correo electrónico"
              // el input muestra lo que tiene el estado email
              value={email}
              onChange={(e) => setEmail(e.target.value)} // solo actualiza, no valida
              onBlur={handleEmailBlur} // valida cuando sale del campo
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

        {/* muestra el error solo si existe */}
        {emailError && <span className="popup__error">{emailError}</span>}

        {/* botón submit */}
        <button
          className="popup__button"
          type="submit"
          disabled={!email || !password || !name || emailError}
        >
          Inscribirse
        </button>

        {/* enlace para cambiar a Login */}
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
