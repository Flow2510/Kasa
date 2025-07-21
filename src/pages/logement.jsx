import logements from "../data/logements.json";
import './logement.scss';

export default function Logement(){
    return(
        <main className="main">
            <section className="logement">
                <img className="logement__image" src={ logements[0].pictures[0]} alt="logement" /> 
                <div className="logement__content">
                    <h1 className="logement__content-title">{logements[0].title}</h1>
                    <h3 className="logement__content-location">{logements[0].location}</h3>
                    {logements[0].tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                    ))}
                </div>
                <div className="logement__profil-wrapper">
                    <div className="logement__rating">
                        <p>★★★★★</p>
                    </div>
                    <div className="logement__profil">
                        <p className="logement__profil-name">{logements[0].host.name}</p>
                        <img className="logement__profil-image" src={logements[0].host.picture} alt={logements[0].host.name} />
                    </div>
                </div>
                <span>mettre accordion </span>
                <span>mettre accordion</span>
            </section>
        </main>
    )
}