import './newsCard.css';

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
  const handleSaveBookmark = () => {
    if (isSavedPage) {
      onRemove(_id); // solo elimina del backend si estamos en saved-news
    } else if (!isSaved) {
      onSave({ image, date, title, text, source, link, keyword });
    }
  };

  return (
    <li className="card">
      <img src={image} className="card__image" alt={title} />
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
