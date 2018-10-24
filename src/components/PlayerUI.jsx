import React, { Component } from 'react';
import {Navbar, NavbarBrand } from 'reactstrap';
import { Button } from 'reactstrap';
import './PlayerUI.css';
import { Badge } from 'reactstrap';


class PlayerUI extends Component {


  render() {
    return (
      <div>
        <Navbar color="dark" className="UI-style">
            <NavbarBrand href="/" className="text-white">
                <Button outline color="primary">Home</Button> {' '}
            </NavbarBrand>
            <h3><Badge color="light" >{this.props.value}</Badge></h3>
            <h4><Badge color="info">{this.props.points} points</Badge></h4>
        </Navbar>
      </div>
    );
  }
}

export default PlayerUI;