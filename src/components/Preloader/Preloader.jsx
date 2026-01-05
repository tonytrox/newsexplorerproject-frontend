import './preloader.css';

function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader__container">
        <span className="preloader__circle"></span>
        <p className="preloader__text">Buscando noticias recientes...</p>
      </div>
    </div>
  );
}

export default Preloader;
