import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';
import './NameForm.css';
import './Resultat.css';

class NameForm extends Component {


  render() {
    return (
      <div className="form-style">
        <div>
          <img className="logo_quizz" src="https://res.cloudinary.com/dsql7dxni/image/upload/v1539780744/Projet%20quizz/pc/Logo_Meko_Quizz.png" alt="Logo_Quizz"/>
          <h1 className="title-style">Bienvenue Quizzeur ! Es-tu prêt à tester ta culture générale ? </h1>
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
        </div>
      </div>
    );
  }
}

export default NameForm;