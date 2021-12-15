import React from 'react';
import Navigation from '../components/Navigation';
import Experience from '../components/Knowledges/Experience';
import Hobbies from '../components/Knowledges/Hobbies';
import Languages from '../components/Knowledges/Languages';
import Others from '../components/Knowledges/Others';

const Knowledges = () => {
    return (
        <div className="knowledges">
            <Navigation />
            <div className="knowledgesContent">
                <Languages />
                <Experience />
                <Others />
                <Hobbies />
            </div>
        </div>
    );
};

export default Knowledges;