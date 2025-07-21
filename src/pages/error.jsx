import { Link } from "react-router-dom";
import './error.scss';

export default function Error(){
    return(
        <main className="main">
            <section className="error">
                <h1 className="error__title">404</h1>
                <p className="error__subtitle">Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/" className="error__link">Retourner sur la page d’accueil</Link>
            </section>
        </main>
    )
}