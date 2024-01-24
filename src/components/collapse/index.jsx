import { useState } from 'react';
import icon from '../../assets/collapse.svg';

function Collapse({ title, content }) {
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
