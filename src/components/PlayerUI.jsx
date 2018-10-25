import React, { Component } from 'react';
import {Navbar, Button, Badge} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import './PlayerUI.css';


class PlayerUI extends Component {

  render() {
    return (
      <div>
        <Navbar color="dark" className="UI-style">
            <NavLink exact to="/" activeClassName="selected" className="text-white">
                <Button outline color="primary">Accueil</Button> {' '}
            </NavLink>
            <h3><Badge color="light" >{this.props.value}</Badge></h3>
            <h4><Badge color="info" >{this.props.points} points</Badge></h4>
        </Navbar>
      </div>
    );
  }
}

export default PlayerUI;