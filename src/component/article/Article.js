import logements from '../../logements.json';
import './article.scss';

function Article() {
    return(
        <>
            {logements.map((logement) => (
                <article key={logement.id} className='article'>
                    <img className='article__image' src= {logement.cover} alt="un logement" />            
                    <h2 className='article__title'>{logement.title}</h2>
                </article>
            ))}
        </>
    )
}

export default Article;