import React from 'react';

const ProgressBar = (props) => {

    
    return (
        <div className={props.className}>
            <h3>{props.title}</h3>
            <div className="years">
                <span>Mois d'éxpériences</span>
                <span>6 mois</span>
                <span>12 mois</span>
               
               
            </div>

            <div>
                {
                    props.languages.map((language) => {
                        let mounthXP = 12;
                        let progressBar = language.xp / mounthXP * 100 + '%';

                        return (
                            <div key={language.id} className="listLanguages">
                                <li>{language.value}</li>
                                <div className="languageProgressBar" style={{width:progressBar}}></div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default ProgressBar;