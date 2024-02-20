import { useParams } from 'react-router-dom';
import { logementList } from '../../data/logements';
import Tag from '../../components/tag';
import Collapse from '../../components/collapse';
import Rating from '../../components/rating';
import Caroussel from '../../components/caroussel';
import Error from '../../components/error';

/**
 * Composant Logement
 * @description Un composant représentant la page de détails d'un logement.
 */
function Logement() {
    // Récupérer l'ID du logement à partir des paramètres de l'URL
    const { idLogement } = useParams();

    // Trouver le logement correspondant à l'ID dans les données de logements
    let currentLogement;
    if (logementList) {
        currentLogement = logementList.find((logement) => logement.id === idLogement);
    }

    // Vérifier si le logement a été trouvé
    return currentLogement ? (
        // Afficher les détails du logement s'il existe
        <div className="logement-container" key={currentLogement.id}>
            {/* Carrousel d'images du logement */}
            <Caroussel pictures={currentLogement.pictures} />
            <div className="logement-box-container">
                <div className="logement-box1">
                    {/* Titre et emplacement du logement */}
                    <div className="logement-content">
                        <h1 className="logement-title">{currentLogement.title}</h1>
                        <h2 className="logement-text">{currentLogement.location}</h2>
                    </div>
                    {/* Liste des tags associés au logement */}
                    <ul className="tag-list">
                        {currentLogement.tags.map((tag, index) => (
                            <Tag tag={tag} key={index} />
                        ))}
                    </ul>
                </div>
                {/* Informations sur l'utilisateur hôte et évaluation du logement */}
                <div className="logement-box2">
                    <div className="logement-user">
                        <h3 className="logement-user-name">{currentLogement.host.name}</h3>
                        <img src={currentLogement.host.picture} alt={currentLogement.host.name} className="logement-user-img"></img>
                    </div>
                    <Rating rating={currentLogement.rating} />
                </div>
            </div>
            {/* Description et équipements du logement sous forme de sections pliables */}
            <div className="logement-wrapper">
                <Collapse title="Description" content={currentLogement.description} />
                <Collapse title="Équipements" content={currentLogement.equipments} />
            </div>
        </div>
    ) : (
        // Afficher une page d'erreur si le logement n'est pas trouvé
        <Error code={400} />
    );
}

export default Logement;
