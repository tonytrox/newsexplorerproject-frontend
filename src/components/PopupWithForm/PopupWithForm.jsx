import './popupWithForm.css';

const PopupWithForm = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="popup__overlay">
      <div className="popup__container" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="popup__close" onClick={onClose} />

        {children}
      </div>
    </div>
  );
};

export default PopupWithForm;
