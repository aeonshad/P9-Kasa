import { useState } from 'react';
import arrowPrevious from '../../assets/arrowright.png';
import arrowNext from '../../assets/arrowleft.png';

function Caroussel({ pictures }) {
    const picturesArray = pictures;
    const [currentIndex, setCurrentIndex] = useState(0);

    function previous() {
        if (currentIndex < picturesArray.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    }

    function next() {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
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
