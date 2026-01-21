import { useState } from 'react';
import './searchForm.css';

function SearchForm() {
  // buscar palabra clave
  const [keyword, setKeyword] = useState('');
  const [searchError, setSearchError] = useState('');

  const handleSubmitForm = (event) => {
    event.preventDefault();

    if (!keyword.trim()) {
      setSearchError('Por favor, introduzca una palabra clave');
      console.log(`estado inicial de searchError: ${searchError} `);
      return;
    }
    // Si el campo está vacío (sin texto útil), el `if` se ejecuta. De lo contrario, se evita la validación.
    // `!keyword.trim()` devuelve `true` solo cuando no hay texto después de quitar espacios.
  };

  const handleInputChange = (event) => {
    setKeyword(event.target.value);
    setSearchError('');
  };

  return (
    <section className="search">
      <div className="search__container">
        <h1 className="search__heading">¿Qué está pasando en el mundo?</h1>
        <p className="search__subheading">
          Encuentra las últimas noticias sobre cualquier tema y guárdalas en tu cuenta personal.
        </p>
        <form className="search__form" onSubmit={handleSubmitForm}>
          <div className="search__form-container">
            <input
              className="search__input"
              type="text"
              placeholder="Introduce un tema"
              value={keyword}
              onChange={handleInputChange}
              // required
            />
            <button type="submit" className="search__button">
              Buscar
            </button>
          </div>
          {searchError && <span className="search__error">{searchError}</span>}
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
