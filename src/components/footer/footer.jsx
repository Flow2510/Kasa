import './footer.scss';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

export default function Footer(){
    return(
        <footer className='footer'>
            <Link to='/'><img src={logo} alt="kasa" className='footer__logo'/></Link>
            <p className='footer__subtitle'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}