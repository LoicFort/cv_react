import React, { Component } from 'react';
import { dataPortfolio } from '../../data/dataPortfolio';
import Project from './Project';

class ListProjects extends Component {

state = { projects: dataPortfolio };


    render() {
        let { projects } = this.state;

        return (
            
            <div className="portfolioContent">
            <ul className="radioDisplay">

            </ul>
            <div className="projects">
                {
                    projects.map(project => {
                        return (
                            <Project 
                                key={project.id}
                                project={project}

                            />
                        )
                    })
                }
            </div>
        </div>
            
        );
    }
}

export default ListProjects;