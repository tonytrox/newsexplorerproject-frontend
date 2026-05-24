import './newsCard.css';
import { useContext } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function NewsCard({
  _id,
  image,
  date,
  title,
  text,
  source,
  link,
  keyword,
  isSaved,
  isSavedPage,
  onSave,
  onRemove,
}) {
  const currentUser = useContext(CurrentUserContext);

  const handleSaveBookmark = () => {
    if (!currentUser) return;

    if (isSavedPage) {
      onRemove(_id);
    } else if (!isSaved) {
      onSave({ image, date, title, text, source, link, keyword });
    }
  };

  return (
    <li className="card">
      <img src={image} className="card__image" alt={title} />

      {isSavedPage && keyword && <span className="card__keyword">{keyword}</span>}

      <div className="card__content">
        <p className="card__date">
          {new Date(date).toLocaleDateString('es-ES', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </p>
        <a href={link} target="_blank" rel="noreferrer" className="card__link">
          <h3 className="card__title">{title}</h3>
        </a>
        <p className="card__text">{text}</p>
        <p className="card__source">{source}</p>
        <button
          title={isSavedPage ? 'Eliminar artículo' : 'Guardar artículo'}
          className={`card__action-button ${isSavedPage ? 'card__save-button_remove' : isSaved && 'card__action-button_saved'}`}
          onClick={handleSaveBookmark}
        />
      </div>
    </li>
  );
}

export default NewsCard;
