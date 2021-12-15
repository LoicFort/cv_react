import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            { id: 1, value: "Javascript", xp:0.6 },
            { id: 2, value: "CSS", xp: 0.6 },
            { id: 3, value: "Node.js / ExpressJS", xp:0.6 },
            { id: 4, value: "postgresql / Pgadmin", xp:0.6 }
        ],
        frameworks: [
            { id: 1, value: "React", xp:0.2 },
            { id: 2, value: "Sass & Boostrap", xp:0.2 }


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

                />
                <ProgressBar 
                 languages={frameworks}frameworks 
                 className="frameworksDisplay"
                 title="frameworks"
                />
            </div>
        );
    }
}

export default Languages;