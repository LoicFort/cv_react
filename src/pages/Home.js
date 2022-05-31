import React from 'react';
import Navigation from '../components/Navigation';



const Home = () => {
    document.addEventListener('mousemove', logKey);

    function logKey(e) {
    //   console.log(window.screen);
      const x = (e.x / (window.screen.width / 360) * 0.5);      
      const background = document.querySelector("h2");
      if(background) {
          background.style.filter = `hue-rotate(${x}deg)`;

      }
      
    
    };

    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1 className="h1__name">Loïc FORT</h1>
                    <h2>Développeur<br/>JS Full stack <br/>Junior</h2>
                    <div className="pdf">
                        <a href="./media/CV_loic_fort_devJS.pdf" target="_blank">Télécharger le CV au format pdf</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;