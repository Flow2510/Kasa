import Carousel from "../../component/carousel/Carousel";
import logements from "../../logements.json";
import './logement.scss';

export function Logement() {
    const logement = logements[0];     // pour l'instant c'est pas dynamique, mettre l'id correspondant au clique de la page pour l'affichage

    return(
        <main className="main">
            <section className="logement">
                <Carousel pictures={logement.pictures} />
                <div className="logement__content">
                    <div className="logement__information">
                        <h2 className="logement__title">{logement.title}</h2>
                        <p className="logement__location">{logement.location}</p>
                        <div className="logement__tags-wrapper">
                            {logement.tags.map((tag, index) => (
                                <span key={index} className="logement__tags">{tag}</span>
                            ))}
                        </div>
                    </div>
                    <div className="logement__profil-wrapper">
                        <div className="logement__profil">
                            <h4 className="logement__profil-name">{logement.host.name}</h4>
                            <img className="logement__profil-image" src={logement.host.picture} alt= {logement.host.name} />
                        </div>
                        <div className="logement__rating">
                            <p>&#11088;</p>  
                            <p>&#11088;</p>
                            <p>&#11088;</p>
                            <p>&#11088;</p>
                            <p>&#11088;</p>
                        </div>
                    </div>
                </div>
                <div className="logement__description">
                    <p>mettre les dropdown</p>
                </div>
            </section>
        </main>
    )
}

export default Logement;