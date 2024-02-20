import { Link } from 'react-router-dom';
import { errorList } from '../../data/error';

/**
 * Composant Error
 * @description Un composant représentant une page d'erreur avec un message spécifique en fonction du code d'erreur.
 * @props {string} code - Le code d'erreur pour afficher le message approprié.
 */
function Error({ code }) {
    // Trouver l'objet d'erreur correspondant au code fourni dans les données d'erreur
    const currentError = errorList.find((error) => error.codeError === code);

    return (
        <div className="error-container">
            <h1 className="error-title">{currentError.codeError}</h1>
            <h2 className="error-text">{currentError.content}</h2>
            <Link className="error-link" to={'/'}>
                Retourner sur la page d'accueil
            </Link>
        </div>
    );
}

export default Error;
