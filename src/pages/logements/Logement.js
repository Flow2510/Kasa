import Carousel from "../../component/carousel/Carousel";
import logements from "../../logements.json";

export function Logement() {
    const logement = logements[0];

    return(
        <main className="main">
            <section className="logement">
                <Carousel pictures={logement.pictures} />
                <div className="logement__content">
                    <div className="logement__information">
                        <h2 className="logement__title">titre du logement</h2>
                        <p className="logement__location">adresse</p>
                        <div className="logement__tags-wrapper">
                            <button className="logement__tags">tag</button>
                        </div>
                    </div>
                    <div className="logement__profil-wrapper">
                        <div className="logement__profil">
                            <h3 className="logement__profil-name">nom</h3>
                            <p>a remplacer par une image de profil</p>
                        </div>
                    </div>
                </div>
                <div className="logement__description">
                    <p>dropdown</p>
                    <p>dropdown</p>
                </div>
            </section>
        </main>
    )
}

export default Logement;