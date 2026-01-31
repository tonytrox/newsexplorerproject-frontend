import './newsCardList.css';

import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({ cards }) {
  return (
    <section className="news">
      <div className="news__container">
        <h2 className="news__title">Resultados de la búsqueda</h2>
        <ul className="news__list">
          {cards.map((itemNews, index) => (
            <NewsCard key={index} {...itemNews} />
          ))}
        </ul>
        <button className="news__button">Ver más</button>
      </div>
    </section>
  );
}

export default NewsCardList;
