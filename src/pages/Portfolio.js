import React from 'react';
import Navigation from '../components/Navigation';
import ListProjects from '../components/Portfolio/ListProjects';

const Portfolio = () => {
    return (
        
        <div className="porfolio">
            <Navigation />
            <ListProjects />
        </div>
        
    );
};

export default Portfolio;