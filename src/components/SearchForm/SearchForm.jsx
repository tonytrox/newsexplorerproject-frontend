import { useState } from 'react';
import './searchForm.css';
import Preloader from '../Preloader/Preloader';
import NotFoundResults from '../NotFoundResults/NotFoundResults';

// Función para simular un retraso
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function SearchForm() {
  // buscar palabra clave
  const [keyword, setKeyword] = useState('');
  const [inputSearchError, setInputSearchError] = useState('');
  // preloader
  const [loading, setLoading] = useState(false);
  // errores
  const [error, setError] = useState(null);

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    if (!keyword.trim()) {
      // Si el campo está vacío, muestra un error y detén el flujo
      setInputSearchError('Por favor, introduzca una palabra clave');
      return;
    }

    // Limpia cualquier error previo antes de iniciar una nueva búsqueda
    setError(null);
    setLoading(true); // Activa el preloader

    try {
      await delay(2000);

      if (keyword === 'none') {
        throw new Error('KEYWORD_ERROR');
      }

      if (keyword === 'error') {
        throw new Error('SERVER_ERROR');
      }
    } catch (err) {
      if (err.message === 'KEYWORD_ERROR') {
        setError({
          title: 'No se encontró nada',
          message: 'Lo sentimos, pero no hay nada que coincida con tus términos de búsqueda.',
        });
      } else {
        setError({
          title: 'Lo sentimos, algo ha salido mal durante la solicitud',
          message:
            'Es posible que haya un problema de conexión o que el servidor no funcione. Por favor, inténtalo más tarde.',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event) => {
    setKeyword(event.target.value);
    setInputSearchError('');
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
            {inputSearchError && <span className="search__error">{inputSearchError}</span>}
          </form>
        </div>
      </section>
      {loading && <Preloader />}

      {!loading && error && <NotFoundResults title={error.title} message={error.message} />}
    </>
  );
}

export default SearchForm;
