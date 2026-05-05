import './newsCard.css';

function NewsCard(props) {
  const {
    urlToImage,
    publishedAt,
    title,
    description,
    source,
    url,
    isSaved,
    onSave,
    onRemove,
    token,
    keyword,
  } = props;

  const handleSaveBookmark = () => {
    if (isSaved) {
      onRemove({ urlToImage, publishedAt, title, description, source });
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

      console.log('artículo a guardar:', article);
      onSave(article); // llama a handleSaveCard en App que llama a createArticle
    }
  };

  return (
    <li className="card">
      <img src={urlToImage} className="card__image" />
      <div className="card__content">
        <p className="card__date">
          {new Date(publishedAt).toLocaleDateString('es-ES', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </p>
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{description}</p>
        <p className="card__source">{source.name}</p>
        <button
          title="Inicia sesión para guardar artículos"
          className={`card__save-button ${isSaved && 'card__save-button_active'}`}
          onClick={handleSaveBookmark}
        ></button>
      </div>
    </li>
  );
}

export default NewsCard;
