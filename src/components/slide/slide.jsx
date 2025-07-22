import PropTypes from 'prop-types';
import './slide.scss';

export default function Slide({source, currentIndex, indexTotal, onPrev, onNext}){
    return (
        <div className="slide">
            <img className="slide__image" src={source} alt="logement" />
            {indexTotal > 1 && (
                <>
                    <div className="slide__arrows">
                        <button className="slide__arrow slide__arrow-left" onClick={onPrev}>←</button>
                        <button className="slide__arrow slide__arrow-right" onClick={onNext}>→</button>
                    </div>
                    <p className="slide__index">{currentIndex}/{indexTotal}</p>
                </>
            )}
        </div>
    );
}

Slide.propTypes = {
    onPrev: PropTypes.func,
    onNext: PropTypes.func,
    source: PropTypes.string.isRequired,
    indexTotal: PropTypes.number.isRequired,
    currentIndex: PropTypes.number.isRequired,
};