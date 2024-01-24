import { useParams } from 'react-router-dom';
import { logementList } from '../../data/logements';
import Tag from '../../components/tag';
import Collapse from '../../components/collapse';
import Rating from '../../components/rating';
import Caroussel from '../../components/caroussel';
import Error from '../../components/error';

function Logement() {
    const { idLogement } = useParams();

    let currentLogement;
    if (logementList) {
        currentLogement = logementList.find((logement) => logement.id === idLogement);
    }
    return currentLogement ? (
        <div className="logement-container" key={currentLogement.id}>
            <Caroussel pictures={currentLogement.pictures} />
            <div className="logement-box-container">
                <div className="logement-box1">
                    <div className="logement-content">
                        <h1 className="logement-title">{currentLogement.title}</h1>
                        <h2 className="logement-text">{currentLogement.location}</h2>
                    </div>
                    <ul className="tag-list">
                        {currentLogement.tags.map((tag, index) => (
                            <Tag tag={tag} key={index} />
                        ))}
                    </ul>
                </div>
                <div className="logement-box2">
                    <div className="logement-user">
                        <h3 className="logement-user-name">{currentLogement.host.name}</h3>
                        <img src={currentLogement.host.picture} alt={currentLogement.host.name} className="logement-user-img"></img>
                    </div>
                    <Rating rating={currentLogement.rating} />
                </div>
            </div>
            <div className="logement-wrapper">
                <Collapse title="Description" content={currentLogement.description} />
                <Collapse title="Équipements" content={currentLogement.equipments} />
            </div>
        </div>
    ) : (
        <Error code={400} />
    );
}

export default Logement;
