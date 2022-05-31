import React from 'react';

const Others = () => {

    const otherSkills = [
        {id: 1, skill: "Anglais B2"},
        {id: 2, skill: "figma"},
        {id: 3, skill: "méthode AGILE"},
        {id: 4, skill: "photoshop et montage vidéo"}
    ]

    return (
        <div className="otherSkills">
            <h3>Autres compétences</h3>
            <ul>{
            otherSkills.map((skill) => {
                
                return (
                    <li key={skill.id}>{skill.skill}</li>

                )
            })}</ul>
            
            
        </div>
    );
};

export default Others;