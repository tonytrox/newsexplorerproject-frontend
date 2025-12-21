import { Routes, Route } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import SearchForm from './components/SearchForm/SearchForm';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchForm />
                <About />
              </>
            }
          />
          <Route
            path="/saved"
            element={
              <div>
                {/* Aquí iría tu componente de noticias guardadas */}
                <h2>Tus artículos guardados</h2>
                {/* <SavedNews /> */}
              </div>
            }
          />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
