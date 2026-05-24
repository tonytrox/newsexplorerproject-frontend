import './home.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import Footer from '../Footer/Footer';

function Home({
  cards,
  setCards,
  savedCards,
  onSave,
  onRemove,
  onOpenLogin,
  onLogout,
  token,
  keyword,
  setKeyword,
}) {
  return (
    <>
      <Header onOpenLogin={onOpenLogin} onLogout={onLogout} />
      <SearchForm
        cards={cards}
        setCards={setCards}
        savedCards={savedCards}
        onSave={onSave}
        onRemove={onRemove}
        token={token}
        keyword={keyword}
        setKeyword={setKeyword}
      />
      <About />
      <Footer />
    </>
  );
}

export default Home;
