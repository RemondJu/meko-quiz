import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Navbar, Modal, ModalBody } from 'reactstrap';
import BestPlayers from './BestPlayers';
import logoMekoQuizz from "../images/logoMekoQuizz.png"
import './NameForm.css';
import './Resultat.css';

class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        modal: false
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        const tab = this.props.bestPlayersTab ;
        if (tab.length !== 0) {
            this.setState({ modal: !this.state.modal });
        } else { 
            alert("Aucun score n'a été enregistré pour le moment.\nJouez au quiz !");
        }

    }

  render() {
    return (
      <div className="form-style">
        <div>
            <Navbar className = "nav-home">
                <Button className='meilleursScores' color="warning" onClick={this.toggle}>Meilleurs Scores</Button>
            </Navbar>
            <img className="logo_quizz" src={logoMekoQuizz} alt="Logo_Quizz"/>
            <h1 className="title-style">Bienvenue Quizeur ! Es-tu prêt à tester ta culture générale ? </h1>
            <form >
            <label>
                <input className="input-style" type="text" placeholder='Saisis ton nom de joueur' value={this.props.value} onChange={this.props.onChange} />
            </label>
            <div>
            <NavLink to="/quiz0" activeClassName="selected">
                <Button color={this.props.buttonColor} size="lg" type="submit" disabled={this.props.disabledPlay} >Jouez !</Button>
              </NavLink>
            </div>
            </form>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className = "modal-BestPlayers">
                <ModalBody>
                    <button className="close" onClick={this.toggle}>&times;</button>
                    <BestPlayers bestPlayersTab = {this.props.bestPlayersTab} />
                </ModalBody>
            </Modal>
        </div>
      </div>
    );
  }
}

export default NameForm;