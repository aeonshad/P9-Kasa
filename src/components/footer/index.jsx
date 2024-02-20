import logo from '../../assets/logo2.png';

/**
 * Composant Footer
 * @description Un composant représentant le pied de page de l'application.
 */
function Footer() {
    return (
        <footer className="footer">
            <img className="footer-logo" src={logo} alt="logo" />
            <h2 className="footer-text">© 2024 Kasa. All rights reserved</h2>
        </footer>
    );
}

export default Footer;
