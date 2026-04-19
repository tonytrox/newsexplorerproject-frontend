import PopupWithForm from '../PopupWithForm/PopupWithForm';
// import './popupLogin.css';

const PopupLogin = ({ isOpen, onClose, onSwitchToRegister }) => {
  return (
    <PopupWithForm isOpen={isOpen} onClose={onClose}>
      {/* título */}
      <h2 className="popup__title">Iniciar sesión</h2>

      {/* campos del formulario */}
      <form className="popup__form">
        <div className="popup__fields">
          <label className="popup__label">
            Correo electrónico
            <input
              className="popup__input"
              type="email"
              placeholder="Introduce tu correo electrónico"
            />
          </label>

          <label className="popup__label">
            Contraseña
            <input className="popup__input" type="password" placeholder="Introduce tu contraseña" />
          </label>
        </div>

        {/* botón submit */}
        <button className="popup__button" type="submit">
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
