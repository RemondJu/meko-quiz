import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Navbar, Modal, ModalBody } from 'reactstrap';
import BestPlayers from './BestPlayers';
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
            alert("Aucun score n\'a été enregistré pour le moment.\nJouez au quiz !");
        }

    }

  render() {
    return (
      <div className="form-style">
        <div>
            <Navbar className = "nav-home">
                <Button className='meilleursScores' color="warning" onClick={this.toggle}>Meilleurs Scores</Button>
            </Navbar>
            <img className="logo_quizz" src="https://res.cloudinary.com/dsql7dxni/image/upload/v1539780744/Projet%20quizz/pc/Logo_Meko_Quizz.png" alt="Logo_Quizz"/>
            <h1 className="title-style">Choisis ton nom de Quizeur !</h1>
            <form >
            <label>
                <input className="input-style" type="text" value={this.props.value} onChange={this.props.onChange} />
            </label>
            <div>
            <NavLink to="/quiz1" activeClassName="selected">
                <Button color={this.props.buttonColor} size="lg" type="submit" disabled={this.props.disabledPlay} >Jouez !</Button>
                </NavLink>
                {/* <NavLink to="/quiz1" activeClassName="selected">
                <input className="button-style" src="https://res.cloudinary.com/dsql7dxni/image/upload/v1539780744/Projet%20quizz/pc/btn_unpressed.png" disabled={this.props.disabledPlay} type="image" value="jouez !"/>
                </NavLink> */}
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