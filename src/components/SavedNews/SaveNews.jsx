import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews({ savedCards, onRemove }) {
  return (
    <main className="saved-news">
      <Header />
      <SavedNewsHeader />
      <NewsCardList cards={savedCards} savedCards={savedCards} onRemove={onRemove} />
      <Footer />
    </main>
  );
}

export default SavedNews;
