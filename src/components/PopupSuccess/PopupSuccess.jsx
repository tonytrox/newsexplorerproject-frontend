import PopupWithForm from '../PopupWithForm/PopupWithForm';

const PopupSuccess = ({ isOpen, onClose, onSwitchToLogin }) => {
  return (
    <PopupWithForm isOpen={isOpen} onClose={onClose}>
      {/* mensaje de éxito */}
      <h2 className="popup__title">¡El registro se ha completado con éxito!</h2>

      {/* enlace para ir al login */}
      <span className="popup__switch-link" onClick={onSwitchToLogin}>
        Iniciar sesión
      </span>
    </PopupWithForm>
  );
};

export default PopupSuccess;
