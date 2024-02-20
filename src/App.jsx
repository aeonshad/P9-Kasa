import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/main.css';
import Error from './components/error';
import Home from './pages/home';
import Header from './components/header';
import Footer from './components/footer';
import Logement from './pages/logement';
import About from './pages/about';

/**
 * Composant App
 * @description Le composant principal de l'application, définissant les routes et la structure globale.
 */
function App() {
    return (
        <Router>
            <div className="main-container">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/logement/:idLogement" element={<Logement />} />
                        <Route path="/about" element={<About />} />
                        <Route path="*" element={<Error code={404} />} />
                    </Routes>
                </main>
            </div>
            <Footer />
        </Router>
    );
}

export default App;

