import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';

const ModifyQuiz = () => {
    return ( 
        <div className="ModifyQuiz">
            <h1 className="adminTitle">Modification d'un quiz :</h1>
            <NavLink to="/admin" activeClassName="selected"><Button color="primary" size="lg" block>Accueil Administrateur</Button ></NavLink>
        </div>
     );
}
 
export default ModifyQuiz;