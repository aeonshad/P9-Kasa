import { useState } from 'react';
import icon from '../../assets/collapse.svg';

/**
 * Composant Collapse
 * @description Un composant réutilisable pour afficher ou masquer du contenu.
 * @props {string} title - Le titre de la section.
 * @props {string|array} content - Le contenu à afficher lorsqu'il est ouvert.
 */
function Collapse({ title, content }) {
    // État pour suivre l'état d'ouverture ou de fermeture du composant
    const [isOpen, setIsOpen] = useState(false);

    return isOpen ? (
        <div className="collapse">
            <div className="collapse-content">
                <h2 className="collapse-title">{title}</h2>
                <img src={icon} alt="collapse" className="collapse-img" onClick={() => setIsOpen(false)} />
            </div>
            <div className="collapse-text-container">
                {Array.isArray(content) ? (
                    content.map((text, index) => (
                        <p className="collapse-text" key={index}>
                            {text}
                        </p>
                    ))
                ) : (
                    <p className="collapse-text">{content}</p>
                )}
            </div>
        </div>
    ) : (
        <div className="collapse-closed">
            <div className="collapse-content">
                <h2 className="collapse-title">{title}</h2>
                <img src={icon} alt="collapse" className="collapse-img" onClick={() => setIsOpen(true)} />
            </div>
        </div>
    );
}

export default Collapse;
