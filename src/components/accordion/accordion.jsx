import { useState } from "react";
import PropTypes from 'prop-types';
import './accordion.scss';

export default function Accordion({title, children}){
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="accordion">
            <button className="accordion__button" onClick={toggle}>
                <span className="accordion__title">{title}</span>
                {isOpen ? <i className="accordion__icon accordion__icon-down fa-solid fa-chevron-down"></i> : <i className="accordion__icon accordion__icon-up fa-solid fa-chevron-up"></i>} {/* condition ? siVrai : siFaux */}
            </button>
            <div className={`accordion__content ${isOpen ? 'accordion__content--open' : ''}`}>
                <div className="accordion__text">{children}</div>
            </div>
        </div>
    )
}

Accordion.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
};