import { Link } from 'react-router-dom';

function Annonces({ id, cover, title }) {
    return (
        <li className="home-card-container">
            <Link to={`/logement/${id}`}>
                <div className="home-card-img-overlay"></div>
                <h3 className="home-card-text">{title}</h3>
                <img className="home-card-img" src={cover} alt={title} />
            </Link>
        </li>
    );
}

export default Annonces;
