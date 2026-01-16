import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import SavedNews from './components/SavedNews/SaveNews';

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saved-news" element={<SavedNews />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
