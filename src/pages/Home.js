import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1>Loïc FORT</h1>
                    <h2>Développeur JS Fullstack Junior</h2>
                    <div className="pdf">
                        <a href="./media/CV_loic_fort_devJS.pdf" target="_blank">Télécharger le CV au format pdf</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;