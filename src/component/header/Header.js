import { Link } from 'react-router-dom';
import Logo from '../../logo.svg'
import './header.scss';

function Header() {
    return (
        <>
            <header className='header'>
                <img className='header__logo' src= {Logo} alt='logo' />
                <nav className='header__nav'>
                    <Link className='header__link header__link-accueil' to="/">Accueil</Link>
                    <Link className='header__link header__link-about' to="/About">A propos</Link>
                </nav>
            </header>
        </>
    )
}

export default Header;