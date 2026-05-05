import './newsCardList.css';

import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({
  title,
  cards,
  onShowMore,
  hasMore,
  savedCards,
  onSave,
  onRemove,
  token,
  keyword,
}) {
  return (
    <section className="news">
      <div className="news__container">
        {title && <h2 className="news__title">{title}</h2>}
        <ul className="news__list">
          {cards.map((itemNews, index) => {
            const isSaved = savedCards.some((savedCard) => savedCard.title === itemNews.title);
            return (
              <NewsCard
                key={index}
                {...itemNews}
                isSaved={isSaved}
                onSave={onSave}
                onRemove={onRemove}
                token={token}
                keyword={keyword}
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
