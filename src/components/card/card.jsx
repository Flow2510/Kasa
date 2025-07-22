import { Link } from 'react-router-dom'
import './card.scss'

export default function Card({ logement }) {
    return(
        <Link className='card__link' to={`/logement/${logement.id}`}>
            <article className="card">
                <img className="card__image" src={logement.cover} alt={logement.description} />
                <h4 className="card__title" >{ logement.title }</h4>
            </article>
        </Link>
    )
}