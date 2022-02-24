// Import

import './NavBar.css';
import Logo from '../Img/Logo.png';

const NavBar = () => {
    return(
        <nav className="NavHome">

            <img src={Logo} className="LogoNav" />

            <ul className="ulList">
                <li>Home</li>
                <li>Menu</li>
                <li>Ramen History</li>
                <li>About</li>

            </ul>

        </nav>
    )
}

export default NavBar;