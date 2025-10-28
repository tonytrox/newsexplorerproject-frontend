import "./App.css";
import Header from "./components/Header/Header";
import SearchForm from "./components/SearchForm/SearchForm";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="page">
            <div className="page__container">
                <Header />
                <SearchForm />
                <About />
                <Footer />
            </div>
        </div>
    );
}

export default App;
