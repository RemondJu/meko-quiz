import React from 'react';
import './Header.css';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className="Header">
            <span className="span1">
                <NavLink exact to="/" activeClassName="selected">
                    <Button color="secondary">Home</Button>{' '}
                </NavLink>Equipe Burger
            </span>
            <h1>{props.title}</h1>
            <span className="span2">0 points</span>
        </div>
    )
}

export default Header;