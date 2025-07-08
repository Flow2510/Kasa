import Logo from '../../logo.svg'
import './footer.scss';

function Footer(){
    return(
        <footer className='footer'>
            <img className='footer__logo' src={Logo} alt='logo' />
            <p className='footer__text'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;