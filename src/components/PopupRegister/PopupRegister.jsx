import PopupWithForm from '../PopupWithForm/PopupWithForm';
import './popupRegister.css';

const PopupRegister = ({ isOpen, onClose, onSwitchToLogin }) => {
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
            />
          </label>

          <label className="popup__label">
            Contraseña
            <input className="popup__input" type="password" placeholder="Introduce tu contraseña" />
          </label>

          <label className="popup__label">
            Nombre de usuario
            <input
              className="popup__input"
              type="text"
              placeholder="Introduce tu nombre de usuario"
            />
          </label>
        </div>

        {/* mensaje de error, solo se muestra si hay error */}
        <span className="popup__error">Este correo electrónico no está disponible</span>

        {/* botón submit */}
        <button className="popup__button" type="submit">
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
