import './newsCard.css';

function NewsCard() {
  return (
    <li className="card">
      <img src={'https://picsum.photos/400/272'} className="card__image" />
      <div className="card__content">
        <p className="card__date">4 de noviembre de 2020</p>
        <h3 className="card__title">
          Todo el mundo necesita un lugar de reflexión en la naturaleza
        </h3>
        <p className="card__text">
          Desde que leí el influyente libro de Richard Louv, "El último niño en el bosque", la idea
          de tener un "lugar de reflexión" especial para mi se me ha quedado grabada. Este consejo,
          que...
        </p>
        <p className="card__source">treehugger</p>
      </div>
    </li>
  );
}

export default NewsCard;
