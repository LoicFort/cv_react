import React, { Component } from 'react';


class Project extends Component {
    render() {
        let { name, languages, link, picture } = this.props.project;
        return (
            <div className="project">
                <a href={link} target="_blank" rel="noreferrer">
                    <h3>{name}</h3>
                    <img className="thumbnail" src={picture} alt="" />
                    <div className="languages">
                        {languages.map(language =>
                            <p className={language} key={language}>{language}</p>
                        )}
                    </div>
                </a>
            </div>
        )

    }
}

export default Project;