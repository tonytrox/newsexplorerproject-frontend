import './savedNewsHeader.css';

function SavedNewsHeader() {
  return (
    <section className="saved-news-header">
      <div className="saved-news-header__container">
        <p className="saved-news-header__subtitle">Artículos guardados</p>
        <h1 className="saved-news-header__title">Elise, tienes 5 artículos guardados</h1>
        <p className="saved-news-header__keywords">
          Por palabras clave:&nbsp;
          <span className="saved-news-header__keywords-bold">Naturaleza, Yellowstone, y 2 más</span>
        </p>
      </div>
    </section>
  );
}

export default SavedNewsHeader;
