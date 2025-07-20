import './footer.scss';
import logo from '../../assets/logo.svg';

export default function Footer(){
    return(
        <footer className='footer'>
            <img src={logo} alt="kasa" className='footer__logo'/>
            <p className='footer__subtitle'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}