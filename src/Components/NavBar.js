// Import

import './NavBar.css';
import Logo from './Img/Logo.png';
import CartWidget from './CartWidget';

const NavBar = () => {
    return(

        <>

            <nav className="NavHome">
                <img src={Logo} className="LogoNav" />
                <ul className="ulList">
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Ramen History</li>
                    <li>Locations</li>
                </ul>
            </nav>

            <CartWidget />

        </>

    )
}

export default NavBar;