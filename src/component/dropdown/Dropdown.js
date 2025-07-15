import { useState } from "react";
import "./dropdown.scss";

const aboutList = [
  {
    id: "fiabilité",
    title: "Fiabilité",
    content:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    id: "respect",
    title: "Respect",
    content:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    id:"service",
    title: "Service",
    content:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    id: "securite",
    title: "Sécurité",
    content:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

function DropDown() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (                                         
    <section className="dropDown">
      {aboutList.map((item, index) => (
        <div className="dropDown__wrapper" key={item.id}>
          <button
            className="dropDown__title-wrapper"
            onClick={() => toggleDropdown(index)}
          >
            <h2 className="dropDown__title">{item.title}</h2>
            <p className="dropDown__arrow">{openIndex === index ? "▲" : "▼"}</p>
          </button>
          {openIndex === index && (
            <div className="dropDown__content">
              <p className="dropDown__text">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export default DropDown;