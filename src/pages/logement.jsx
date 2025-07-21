import Accordion from "../components/accordion/accordion";
import Slide from "../components/slide/slide";
import logements from "../data/logements.json";
import './logement.scss';
import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";

export default function Logement(){
    const { id } = useParams();

    const logement = logements.find((logement) => logement.id === id);
    const [index, setIndex] = useState(0);    
    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % pictures.length);
    };

    const previousSlide = () => {
        setIndex((prev) => (prev === 0) ? pictures.length - 1 : prev - 1);
    };

    if (!logement) {
        return <Navigate to="/error" />;
    }

    const pictures = logement.pictures;

    return(
        <main className="main">
            <section className="logement">
                <Slide 
                    source={pictures[index]}
                    indexTotal={logement.pictures.length}
                    currentIndex={index + 1}
                    onNext={nextSlide}
                    onPrev={previousSlide}
                />
                <div className="logement__content">
                    <h1 className="logement__content-title">{logement.title}</h1>
                    <h3 className="logement__content-location">{logement.location}</h3>
                    {logement.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                    ))}
                </div>
                <div className="logement__profil-wrapper">
                    <div className="logement__rating">
                        {logement.rating === "1" && <p>★☆☆☆☆</p>}
                        {logement.rating === "2" && <p>★★☆☆☆</p>}
                        {logement.rating === "3" && <p>★★★☆☆</p>}
                        {logement.rating === "4" && <p>★★★★☆</p>}
                        {logement.rating === "5" && <p>★★★★★</p>}
                    </div>
                    <div className="logement__profil">
                        <p className="logement__profil-name">{logement.host.name}</p>
                        <img className="logement__profil-image" src={logement.host.picture} alt={logement.host.name} />
                    </div>
                </div>
                <div className="logement__description">
                    <Accordion className="logement__accordion" title='description'>{logement.description}</Accordion>
                    <Accordion className="logement__accordion" title='equipements'>
                        <ul className="logement__list">
                            {logement.equipments.map((equipment) => (
                                <li className="logement__list-li" key={equipment}>{equipment}</li>
                            ))}
                        </ul>
                    </Accordion>
                </div>
            </section>
        </main>
    )
}