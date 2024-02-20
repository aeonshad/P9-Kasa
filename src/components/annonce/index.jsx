import { Link } from 'react-router-dom';

/**
 * Composant Annonce
 * @description Un composant représentant une annonce avec un lien vers une page de détails.
 * @props {string} id - L'identifiant unique de l'annonce.
 * @props {string} cover - L'URL de l'image de couverture de l'annonce.
 * @props {string} title - Le titre de l'annonce.
 */
function Annonce({ id, cover, title }) {
    return (
        <li className="home-card-container">
            {/* Lien vers la page de détails de l'annonce */}
            <Link to={`/logement/${id}`}>
                <div className="home-card-img-overlay"></div>
                <h3 className="home-card-text">{title}</h3>
                <img className="home-card-img" src={cover} alt={title} />
            </Link>
        </li>
    );
}

export default Annonce;
