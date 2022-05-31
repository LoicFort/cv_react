import React from 'react';

const Experience = () => {

    const experiences = [
        { id: 1, title: "formation dev web O'clock", duration: "6 mois", description: "formation en téléprésentiel de 6 mois, socle HTML, CSS, JS puis spécialisation data" },
        { id: 2, title: "AMOA GED", duration: "3 ans", description: "Assistance fonctionnelle niveau II, transition acquistion GED v1 > v2" }
    ]

    return (
<div className="experiences">
     {
     experiences.map((experience) => {
        
         return (
         <div key={experience.id} className={`exp-${experience.id}`}>
             <h3>{experience.title}</h3>
             <h4>{experience.duration}</h4>
             <p>{experience.description}</p>
            
         </div>
         
         )
        

        })
        }
</div>       
      
    );
};

export default Experience;

