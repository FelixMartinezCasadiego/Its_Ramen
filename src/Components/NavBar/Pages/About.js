import React from "react";
import Enjoy from '../../Img/Enjoy.jpg';
import '../../NavBar/Pages/About.css';

const About = () => {
    return (
        <div className="centerAb">
            <h2>This project is about a little information about Ramen</h2>
            <span>(Programming with React JS and using Firebase)</span>
            <h3>Enjoy !</h3>
            <img src={Enjoy} alt='Enjoy Ramen' className="ImgAb"/>
        </div>
    )
}

export default About;