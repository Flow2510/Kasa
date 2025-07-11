import { Link } from "react-router-dom";
import './error.scss';

function Error(){
    return(
        <>
            <main className="main">
                <section className="error">
                    <h1 className="error__title">404</h1>
                    <span className="error__subtitle">Oups! La page que vous demandez n'existe pas.</span>
                    <Link to='/'>Retourner sur la page d’accueil</Link>
                </section>
            </main>
        </>
    )
}

export default Error;