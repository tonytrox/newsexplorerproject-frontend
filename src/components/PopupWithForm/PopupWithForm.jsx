import './popupWithForm.css';

const PopupWithForm = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    // overlay oscuro, click fuera del modal lo cierra
    <div className="popup__overlay" onClick={onClose}>
      {/* contenedor del modal, stopPropagation evita que el click dentro del modal lo cierre */}
      <div className="popup__container" onClick={(e) => e.stopPropagation()}>
        {/* botón X para cerrar */}
        <button type="button" className="popup__close" onClick={onClose} />

        {/* contenido variable: título, campos, botón, span → vienen del componente hijo */}
        {children}
      </div>
    </div>
  );
};

export default PopupWithForm;
