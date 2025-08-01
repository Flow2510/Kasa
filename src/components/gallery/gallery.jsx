import logements from "../../data/logements.json";
import Card from "../card/card";
import './gallery.scss'

export default function Gallery(){
    return(
        <section className="gallery">
            {logements.map((logement) => (
                <Card key={logement.id} logement={logement} />
            ))}
        </section>
    )
}