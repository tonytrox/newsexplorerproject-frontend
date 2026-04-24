import './home.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import Footer from '../Footer/Footer';

// Home recibe la prop y la pasa a Header:
function Home({ cards, setCards, savedCards, onSave, onRemove, onOpenLogin }) {
  return (
    <>
      {/* pasa onOpenLogin a Header para que llegue al botón de Navigation */}
      <Header onOpenLogin={onOpenLogin} />
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
