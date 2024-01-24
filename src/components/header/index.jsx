import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

function Header() {
    return (
        <header>
            <nav className="navbar">
                <div className="navbar-container-logo">
                    <img className="navbar-logo" src={logo} alt="logo" />
                </div>
                <div className="navbar-container-link">
                    <Link className="navbar-link" to={'/'}>
                        Accueil
                    </Link>
                    <Link className="navbar-link" to={'/about'}>
                        A Propos
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
