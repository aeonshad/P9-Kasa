import Collapse from '../../components/collapse';
import { aboutList } from '../../data/about';

/**
 * Composant About
 * @description Un composant représentant une page "À propos" avec des sections pliables.
 */
function About() {
    return (
        <div className="about-container">
            <div className="about-header"></div>
            {/* Liste des sections pliables basées sur les données de aboutList */}
            <div className="about-list">
                {aboutList.map(({ title, content }, index) => (
                    // Utilisation du composant Collapse pour chaque section
                    <Collapse title={title} content={content} key={index} />
                ))}
            </div>
        </div>
    );
}

export default About;
