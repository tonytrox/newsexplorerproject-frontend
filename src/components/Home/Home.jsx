import './home.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import Footer from '../Footer/Footer';

// importamos el componente para renderizado
import Popup from '../PopupWithForm/PopupWithForm';

function Home({ cards, setCards, savedCards, onSave, onRemove }) {
  return (
    <>
      <Popup />
      <Header />
      <SearchForm
        cards={cards}
        setCards={setCards}
        savedCards={savedCards}
        onSave={onSave}
        onRemove={onRemove}
      />
      <About />
      <Footer />
    </>
  );
}

export default Home;
