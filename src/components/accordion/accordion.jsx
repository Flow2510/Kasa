import { useState } from "react";
import './accordion.scss';

export default function Accordion({title, children}){
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="accordion">
            <button className="accordion__button" onClick={toggle}>
                <span>{title}</span>
                 <span>{isOpen ? '-' : '+'}</span>  {/* condition ? siVrai : siFaux */}
            </button>
            {isOpen && (
                <div className="accordion__content">
                    {children}
                </div>
            )}
        </div>
    )
}