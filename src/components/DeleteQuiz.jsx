import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';

const DeleteQuiz = () => {
    return ( 
        <div className="DeleteQuiz">
            <h1 className="adminTitle">Supprimer un quiz :</h1>
            <NavLink to="/admin" activeClassName="selected"><Button color="primary" size="lg" block>Accueil Administrateur</Button ></NavLink>
        </div>
     );
}
 
export default DeleteQuiz;