import './newsCard.css';

function NewsCard(props) {
  const { urlToImage, publishedAt, title, description, source } = props;

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
      </div>
    </li>
  );
}

export default NewsCard;
