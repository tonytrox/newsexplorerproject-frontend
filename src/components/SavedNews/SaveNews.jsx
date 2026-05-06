import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews({ savedCards, onRemove, currentUser, onLogout }) {
  return (
    <main className="saved-news">
      <Header currentUser={currentUser} onLogout={onLogout} />
      <SavedNewsHeader />
      <NewsCardList
        cards={savedCards}
        savedCards={savedCards}
        onRemove={onRemove}
        isSavedPage={true}
      />
      <Footer />
    </main>
  );
}

export default SavedNews;
