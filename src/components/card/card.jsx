import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './card.scss';

export default function Card({ logement }) {
    return(
        <Link className='card__link' to={`/logement/${logement.id}`}>
            <article className="card">
                <img className="card__image" src={logement.cover} alt={logement.description} />
                <h4 className="card__title" >{ logement.title }</h4>
            </article>
        </Link>
    )
};

Card.propTypes= {
    logement: PropTypes.shape({
        id: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
        description: PropTypes.string,
        title: PropTypes.string.isRequired,
    }).isRequired,
};