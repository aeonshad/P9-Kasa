import Annonces from '../../components/annonce';
import { logementList } from '../../data/logements';

/**
 * Composant Home
 * @description Un composant représentant la page d'accueil affichant une liste d'annonces.
 */
function Home() {
    return (
        <div className="home-container">
            <div className="home-header">
                <h1 className="home-header-title">Chez vous, partout et ailleurs</h1>
            </div>
            {/* Liste d'annonces à afficher sur la page d'accueil */}
            <div className="home-card">
                <ul className="home-card-list">
                    {logementList.map(({ id, cover, title }, index) => (
                        // Utilisation du composant Annonces pour chaque annonce
                        <Annonces cover={cover} title={title} id={id} key={index} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Home;
