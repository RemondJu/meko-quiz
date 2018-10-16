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
            <Badge color="primary" >{this.props.value}</Badge>
          </NavbarBrand>
          <Button outline color="primary" onClick={this.toggleNavbar}>{this.props.points} points</Button>
        </Navbar>
      </div>
    );
  }
}

export default PlayerUI;