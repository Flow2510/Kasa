import logo from './../../assets/logo.svg';
import { Link } from 'react-router-dom';
import './header.scss';

export default function Header(){
    return(
        <header className='header'>
            <Link><img className='header__logo' src={logo} alt='kasa'/></Link>
            <nav className='header__menu'>
                <Link to="/" className='header__menu-link'>Accueil</Link>
                <Link to="/about" className='header__menu-link'>A Propos</Link>
            </nav>
        </header>
    )
}