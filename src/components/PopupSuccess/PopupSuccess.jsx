import PopupWithForm from '../PopupWithForm/PopupWithForm';

const PopupSuccess = ({ isOpen, onClose, onSwitchToLogin }) => {
  return (
    <PopupWithForm isOpen={isOpen} onClose={onClose}>
      <h2 className="popup__title">¡El registro se ha completado con éxito!</h2>

      <span className="popup__switch-link" onClick={onSwitchToLogin}>
        Iniciar sesión
      </span>
    </PopupWithForm>
  );
};

export default PopupSuccess;
