import { useState } from "react";

export default function Accordion({title, children}){
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div>
            <button onClick={toggle}>
                <span>{title}</span>
                <span>{isOpen ? '-' : '+'}</span>
            </button>
            {isOpen && (
                <div>
                    {children}
                </div>
            )}
        </div>
    )
}