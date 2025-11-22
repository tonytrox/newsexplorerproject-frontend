import './searchForm.css';
// import { useContext } from 'react';
// import { keywordContext } from '../../contexts/keyWordContext';

function SearchForm({ handleSearch }) {
  // const { keyword, setkeyword } = useContext(keywordContext);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   handleSearch(keyword);
  // };

  // const handleKeyWord = (event) => {
  //   setkeyword(event.target.value);
  // };

  return (
    <section className="search">
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
            // value={keyword}
            placeholder="Introduce un tema"
            // onChange={}
            required
          />
          <button type="submit" className="search__button">
            Buscar
          </button>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
