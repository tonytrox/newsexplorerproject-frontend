import { useState } from 'react';
import './searchForm.css';
import Preloader from '../Preloader/Preloader';
import NotFoundResults from '../NotFoundResults/NotFoundResults';

function SearchForm() {
  // buscar palabra clave
  const [keyword, setKeyword] = useState('');
  const [searchError, setSearchError] = useState('');
  // preloader
  const [loading, setLoading] = useState(false);
  // errores
  const [error, setError] = useState(null);

  const handleSubmitForm = (event) => {
    event.preventDefault();

    if (!keyword.trim()) {
      // '!keyword.trim()' devuelve `true` solo cuando no hay texto después de quitar espacios.
      setSearchError('Por favor, introduzca una palabra clave');
      return;
    }

    setSearchError('');
    setLoading(true); // Activa el preloader
    setError(null);

    setTimeout(() => {
      setLoading(false);

      // igualdad estricta. Compara
      if (keyword === 'error') {
        setError({
          title: 'Lo sentimos, algo ha salido mal durante la solicitud',
          message:
            'Es posible que haya un problema de conexión o que el servidor no funcione. Por favor, inténtalo más tarde.',
        });
      }
    }, 5000);
  };

  const handleInputChange = (event) => {
    setKeyword(event.target.value);
    setSearchError('');
  };

  return (
    <>
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
      {loading && <Preloader />}

      {!loading && error && <NotFoundResults title={error.title} message={error.message} />}
    </>
  );
}

export default SearchForm;
