import React from 'react';
import RamenHis from '../../Img/RamenHistory.jpg';
import RamenHis2 from '../../Img/Ingredientes.png'
import '../../NavBar/Pages/RamenHistory.css';

const RamenHistory = () => {
    return(
        <div className='RamenHis'>
            <h1>WHAT IS RAMEN?</h1>
            <p className='SubTitle'>Ramen originally comes from China and is a variation of the dish called lamian.</p>
            <img src={RamenHis} alt='RamenHistory' />
            <p className='Parrafo'>Ramen originally comes from China and is a variation of the dish called lamian. After the second world war, the soldiers returned with an appreciation for ramen and ramen restaurants were created, quickly becoming popular and making it an emblematic dish of Japanese cuisine. Currently it has become popular throughout the world, creating ramen restaurant areas in the cities of the most important countries such as the United States and France. It basically consists of a bowl of wheat noodles in broth cooked for a minimum of 8 hours with different toppings.</p>
            <h2>HOW DO YOU EAT IT?</h2>
            <p><span>1.</span> Before ordering the fork, try the chopsticks!</p>
            <p><span>2.</span> Taste the broth before getting into the noodles, savoring the umami (fifth taste)</p>    
            <p><span>3.</span> Eat the noodles fast before they go soft!</p>
            <p><span>4.</span> In Japan it is not rude to make noise when slurping noodles, it is said that the air helps better incorporate the flavors, so in Nakama you can do it!</p>
            <p><span>5.</span> The other ingredients are eaten to taste! Don't delay in finishing it because the broth gets cold.
            </p>
            <img src={RamenHis2} alt='RamenHis2' />
            <p><span>(1)</span> CHASHU Rolled pork belly marinated in soy sauce and slow cooked</p>
            <p><span>(2)</span> NORI Seaweed Sheet</p>
            <p><span>(3)</span> AJITAMA Egg marinated in soy sauce</p>
            <p><span>MISO</span> Fermented bean paste typical of Asian cuisine, for centuries it was considered a healing food and its name means "source of flavor"</p>
            <p><span>UDON</span>  Thick wheat noodle</p>
            <p><span>PANKO</span> Japanese Crispy Batter</p>
            <p><span>WAKAME</span> Japanese edible seaweed</p>
        </div>
    )
};

export default RamenHistory;