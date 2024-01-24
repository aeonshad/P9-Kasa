import starOn from '../../assets/star-active.png';
import starOff from '../../assets/star-inactive.png';

function Rating({ rating }) {
    const range = [1, 2, 3, 4, 5];
    return (
        <div className="logement-rating-container">
            {range.map((rangeElem, index) =>
                rating >= rangeElem ? (
                    <img className="logement-rating-img" src={starOn} alt="star-icon" key={index} />
                ) : (
                    <img className="logement-rating-img" src={starOff} alt="star-icon" key={index} />
                )
            )}
        </div>
    );
}
export default Rating;
