import logo from './../../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import './header.scss';

export default function Header(){
    return(
        <header className='header'>
            <NavLink to="/"><img className='header__logo' src={logo} alt='kasa'/></NavLink>
            <nav className='header__menu'>
                <NavLink to="/" className={({ isActive }) => isActive ? 'header__menu-link active__link' : 'header__menu-link'}>Accueil</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'header__menu-link active__link' : 'header__menu-link'}>A Propos</NavLink>
            </nav>
        </header>
    )
}