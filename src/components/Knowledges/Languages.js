import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            { id: 1, value: "Javascript", xp: 0.6 },
            { id: 2, value: "CSS / HTML", xp: 0.6 },

        ],
        frameworks: [
            { id: 1, value: "React / React-Redux", xp: 0.2 },
            { id: 2, value: "Sass & Boostrap", xp: 0.2 },
            { id: 3, value: "Node.js / ExpressJS", xp: 0.6 },
            { id: 4, value: "postgresql - SQL - graphQl / pgAdmin", xp: 0.6 }
        ]
    }

    render() {
        let { languages, frameworks } = this.state;

        return (
            <div className="languagesAndFrameworks">
                <ProgressBar
                    languages={languages}
                    className="languageDisplay"
                    title="languages"
                    key={languages.id}

                />
                <ProgressBar
                    languages={frameworks} 
                    className="frameworksDisplay"
                    title="frameworks / outils"
                    key={frameworks.id}
                />
            </div>
        );
    }
}

export default Languages;