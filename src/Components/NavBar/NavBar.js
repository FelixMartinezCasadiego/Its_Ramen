// Import

import './NavBar.css';
import { Link } from 'react-router-dom';
import Logo from '../Img/Logo.png';


const NavBar = () => {
    return(

        <>

            <nav className="NavHome">
                <img src={Logo} className="LogoNav" />
                <ul className="ulLinkst">
                    <Link to="/Home">Home</Link>
                    <Link to="/Menu">Menu</Link>
                    <Link to="/RamenHistory">Ramen History</Link>
                    <Link to="/Locations">Locations</Link>
                </ul>
            </nav>



        </>

    )
}

export default NavBar;