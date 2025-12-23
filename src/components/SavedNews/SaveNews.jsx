import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews() {
  return (
    <main className="saved-news">
      {/* <Header /> */}
      <SavedNewsHeader />
      <NewsCardList />
      <Footer />
    </main>
  );
}

export default SavedNews;
