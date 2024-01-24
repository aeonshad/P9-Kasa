import { Link } from 'react-router-dom';
import { errorList } from '../../data/error';

function Error({ code }) {
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
