import './searchForm.css';

function SearchForm() {
  return (
    <section className="search">
      <div className="search__container">
        <h1 className="search__heading">¿Qué está pasando en el mundo?</h1>
        <p className="search__subheading">
          Encuentra las últimas noticias sobre cualquier tema y guárdalas en tu cuenta personal.
        </p>
        <form className="search__form">
          <div className="search__form-container">
            <input
              className="search__input"
              type="text"
              id="search"
              placeholder="Introduce un tema"
              required
            />
            <button type="submit" className="search__button">
              Buscar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
