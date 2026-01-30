import './home.css';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import Footer from '../Footer/Footer';
import NewsCardList from '../NewsCardList/NewsCardList';

function Home() {
  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <SearchForm />
        {/* <NewsCardList /> */}
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
