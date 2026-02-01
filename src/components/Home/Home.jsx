import './home.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import Footer from '../Footer/Footer';

function Home({ cards, setCards, savedCards, onSave, onRemove }) {
  return (
    <>
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
