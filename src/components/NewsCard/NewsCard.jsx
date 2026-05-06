import './newsCard.css';

function NewsCard(props) {
  const {
    _id,
    urlToImage,
    image,
    publishedAt,
    date,
    title,
    description,
    text,
    source,
    url,
    link,
    isSaved,
    isSavedPage,
    onSave,
    onRemove,
    token,
    keyword,
  } = props;

  const handleSaveBookmark = () => {
    if (isSavedPage) {
      onRemove(_id);
    } else if (isSaved) {
      onRemove(_id);
    } else {
      // mapeo NewsAPI → backend
      const article = {
        keyword,
        title,
        text: description, // description → text
        date: publishedAt, // publishedAt → date
        source: source.name, // source.name → source
        link: url, // url → link
        image: urlToImage, // urlToImage → image
      };
      onSave(article); // llama a handleSaveCard en App que llama a createArticle
    }
  };

  return (
    <li className="card">
      <img src={isSavedPage ? image : urlToImage} className="card__image" />
      <div className="card__content">
        <p className="card__date">
          {new Date(isSavedPage ? date : publishedAt).toLocaleDateString('es-ES', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </p>
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{description}</p>
        <p className="card__source">{isSavedPage ? source : source.name}</p>
        <button
          title={isSavedPage ? 'Eliminar artículo' : 'Guardar artículo'}
          className={`card__save-button ${isSavedPage ? 'card__save-button_delete' : isSaved && 'card__save-button_active'}`}
          onClick={handleSaveBookmark}
        ></button>
      </div>
    </li>
  );
}

export default NewsCard;
