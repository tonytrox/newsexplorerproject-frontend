import './newsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import { normalizeArticle } from '../../utils/normalizeArticle';

function NewsCardList({
  title,
  cards,
  onShowMore,
  hasMore,
  savedCards,
  onSave,
  onRemove,
  keyword,
  isSavedPage,
}) {
  return (
    <section className="news">
      <div className="news__container">
        {title && <h2 className="news__title">{title}</h2>}
        <ul className="news__list">
          {cards.map((itemNews, index) => {
            // normalizamos antes de pasar a NewsCard
            // así NewsCard siempre recibe el mismo formato
            const article = normalizeArticle(itemNews, keyword);
            const isSaved = savedCards
              ? savedCards.some((savedCard) => savedCard.title === article.title)
              : false;

            return (
              <NewsCard
                key={index}
                {...article} // ← datos normalizados
                isSaved={isSaved}
                isSavedPage={isSavedPage}
                onSave={onSave}
                onRemove={onRemove}
              />
            );
          })}
        </ul>

        {hasMore && (
          <button className="news__button" onClick={onShowMore}>
            Ver más
          </button>
        )}
      </div>
    </section>
  );
}

export default NewsCardList;
