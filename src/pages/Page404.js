import React from 'react';
import { NavLink } from 'react-router-dom';


const Page404 = () => {
    return (
       <div className="notFound">
           <div className="notFoundContent">
               <h3>
                   Vous semblez perdu, je vous invite à revenir à l'accueil
               </h3>
               <NavLink exact to='/'>
                    <button>Accueil</button> 
               </NavLink>
           </div>
       </div>
    );
};

export default Page404;