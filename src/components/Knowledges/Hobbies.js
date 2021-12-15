import React from 'react';

const Hobbies = () => {


    const hobbies = [
        { id: 1, hobbie: "cyclisme et VTT" },
        { id: 2, hobbie: "dessin: tablette/ papier" },
        { id: 3, hobbie: "oenologie" },
        { id: 4, hobbie: "peinture" }
    ];

    return (
        <div className="hobbies">
            <h3>Centres d'intérêts</h3>
            <ul>
                {
                    hobbies.map((hobbie) => {
                        return (
                        <li>{hobbie.hobbie}</li>
                        )
                    })}
            </ul>
        </div>
    );
};

export default Hobbies;