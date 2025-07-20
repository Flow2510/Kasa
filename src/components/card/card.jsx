import './card.scss'

export default function Card({ logement }) {
    return(
        <article className="card">
            <img className="card__image" src={logement.cover} alt={logement.description} />
            <h2 className="card__title" >{ logement.title }</h2>
        </article>
    )
}