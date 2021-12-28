import React, { Component } from 'react';

class Project extends Component {
    render() {

        let {name, languages, source, info, picture} = this.props.project;



        return (
            <div className="project">
                <h3>{name}</h3>
                <div className="languages">
                    {languages.map(language => <div className="language">{language}</div>    )}
                </div>
                <img src={picture} alt="compostons" />
                
            </div>
        );
    }
}

export default Project;