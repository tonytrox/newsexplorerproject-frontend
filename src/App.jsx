import { Routes, Route } from 'react-router';
import './App.css';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/saved"
            element={
              <div>
                <h2>Tus artículos guardados</h2>
                {/* <SavedNews /> */}
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
