import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (

        <div className="sidebar">           

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" >
                           Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/Competences" >
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/Portfolio" >
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/Contact" >
                            <span>Contact</span>
                        </NavLink>
                    </li>

                </ul>
            </div>

            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/lo%C3%AFc-fort/" target="_blanck" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/LoicFort" target="_blanck" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                </ul>
            </div>

        </div>

    );
};

export default Navigation;