import starOn from '../../assets/star-active.png';
import starOff from '../../assets/star-inactive.png';

/**
 * Composant Rating
 * @description Un composant affichant une évaluation sous forme d'icônes d'étoiles.
 * @props {number} rating - La note à afficher (doit être un nombre entre 1 et 5 inclus).
 */
function Rating({ rating }) {
    // Définir la plage d'évaluations possibles (de 1 à 5 étoiles)
    const range = [1, 2, 3, 4, 5];
    return (
        <div className="logement-rating-container">
            {range.map((rangeElem, index) =>
                rating >= rangeElem ? (
                    // Afficher une étoile active si l'évaluation est supérieure ou égale à l'évaluation actuelle dans la boucle
                    <img className="logement-rating-img" src={starOn} alt="star-icon" key={index} />
                ) : (
                    // Sinon, afficher une étoile inactive
                    <img className="logement-rating-img" src={starOff} alt="star-icon" key={index} />
                )
            )}
        </div>
    );
}
export default Rating;
