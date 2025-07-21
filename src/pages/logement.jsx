import Accordion from "../components/accordion/accordion";
import Slide from "../components/slide/slide";
import logements from "../data/logements.json";
import './logement.scss';
import { useState } from "react";

export default function Logement(){
    const pictures = logements[0].pictures;
    const [index, setIndex] = useState(0);    

    const nextSlide = () => {
        setIndex((prev) => (prev + 1))
    };

    const previousSlide = () => {
        setIndex((prev) => (prev - 1))
    };

    return(
        <main className="main">
            <section className="logement">
                <Slide 
                    source={pictures[index]}
                    indexTotal={logements[0].pictures.length}
                    currentIndex={index + 1}
                    onNext={nextSlide}
                    onPrev={previousSlide}
                />
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
                <div className="logement__description">
                    <Accordion className="logement__accordion" title='description'>{logements[0].description}</Accordion>
                    <Accordion className="logement__accordion" title='equipements'>
                        <ul className="logement__list">
                            {logements[0].equipments.map((equipment) => (
                                <li className="logement__list-li" key={equipment}>{equipment}</li>
                            ))}
                        </ul>
                    </Accordion>
                </div>
            </section>
        </main>
    )
}