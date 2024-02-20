import { useState } from 'react';
import arrowPrevious from '../../assets/arrowright.png';
import arrowNext from '../../assets/arrowleft.png';

/**
 * Composant Caroussel
 * @description Un composant de carrousel simple pour afficher une série d'images avec des boutons de navigation.
 * @props {array} pictures - Un tableau d'URLs des images à afficher dans le carrousel.
 */
function Caroussel({ pictures }) {
    // État pour suivre l'index de l'image actuellement affichée
    const [currentIndex, setCurrentIndex] = useState(0);
    const picturesArray = pictures;

    /**
     * Fonction pour passer à l'image précédente dans le carrousel.
     */
    function previous() {
        if (currentIndex < picturesArray.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            // Revenir à la première image si c'est la dernière
            setCurrentIndex(0);
        }
    }

    /**
     * Fonction pour passer à l'image suivante dans le carrousel.
     */
    function next() {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            // Passer à la dernière image si c'est la première
            setCurrentIndex(picturesArray.length - 1);
        }
    }

    return picturesArray.length > 1 ? (
        <div className="caroussel">
            <img src={arrowPrevious} alt="" onClick={() => previous()} className="caroussel-btn left" />
            <img className="caroussel-img" src={picturesArray[currentIndex]} alt="" />
            <img src={arrowNext} alt="" onClick={() => next()} className="caroussel-btn right" />
            <p className="caroussel-number">
                {currentIndex + 1}/{picturesArray.length}
            </p>
        </div>
    ) : (
        <img className="caroussel-img" src={picturesArray[currentIndex]} alt="" />
    );
}

export default Caroussel;
