import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './Footer.css'
import facebook_logo from "../images/facebook_logo.png";
import twitter_logo from "../images/twitter_logo.png";
import instagram_logo from "../images/instagram_logo.png";
import coeur_logo from "../images/coeur_logo.png";


class Footer extends Component {

  render() {
    return (
      <div className="background-footer">
      <span className="meko" href="">Meko Agency</span>
        <footer className="logo-footer">
          <a href=""><img className="logo" alt="Facebook" src={facebook_logo}></img></a>
          <a href=""><img className="logo" alt="Twitter" src={twitter_logo}></img></a>
          <a href=""><img className="logo" alt="instagram" src={instagram_logo}></img></a>
        </footer>
        <span className="burger">Made with <img className="logo-coeur" alt="coeur" src={coeur_logo}></img> by Team BURGER</span>
      </div>
    )
  }
}
export default Footer;