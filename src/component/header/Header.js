import Logo from '../../logo.svg'
import './header.scss';

function Header() {
    return (
        <>
            <header className='header'>
                <img className='header__logo' src= {Logo} alt='logo' />
                <nav className='header__nav'>
                    <ul className='header__list'>
                        <li className='header__li'>Accueil</li>
                        <li className='header__li'>A Propos</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;