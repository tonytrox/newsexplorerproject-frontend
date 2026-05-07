import './savedNewsHeader.css';
import { useContext } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function SavedNewsHeader({ savedCards }) {
  const currentUser = useContext(CurrentUserContext);

  // extrae keywords únicas de los artículos guardados
  const keywords = [...new Set(savedCards.map((card) => card.keyword))];

  // muestra máximo 3 keywords, el resto como "y N más"
  const visibleKeywords = keywords.slice(0, 3).join(', ');
  const extraCount = keywords.length - 3;
  const keywordsText = extraCount > 0 ? `${visibleKeywords}, y ${extraCount} más` : visibleKeywords;

  return (
    <section className="saved-news-header">
      <div className="saved-news-header__container">
        <p className="saved-news-header__subtitle">Artículos guardados</p>
        <h1 className="saved-news-header__title">
          {currentUser?.name}, tienes {savedCards.length} artículos guardados
        </h1>
        <p className="saved-news-header__keywords">
          Por palabras clave:&nbsp;
          <span className="saved-news-header__keywords-bold">{keywordsText}</span>
        </p>
      </div>
    </section>
  );
}

export default SavedNewsHeader;
