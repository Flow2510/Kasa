import './carousel.scss';
import { useState } from 'react';

export function Carousel({pictures}){                           // reçoit un tableau d'images en props
    const [index, setIndex] = useState(0);                      // etat pour stocker l'index de l'image actuelle

    const next = () => {
        setIndex((index + 1) % pictures.length);                //boucle qui revient à 0 si on dépasse la fin
    };

    const prev = () => {
        setIndex((index - 1 + pictures.length) % pictures.length);  //revient vers la fin si on est au début
    };

    return(
        <div className="carousel">
            <img className='carousel__image' src={pictures[index]} alt={`${index + 1}`} />
            <div className="carousel__arrow">
                <button onClick={prev} className="carousel__arrow carousel__arrow-left">left</button>
                <button onClick={next} className="carousel__arrow carousel__arrow-right">right</button>
            </div>
        </div>
    )
}

export default Carousel;