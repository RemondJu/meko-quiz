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
          <h1 className="title-style">Choisis ton nom de Quizeur !</h1>
          <form >
            <label>
              <input className="input-style" type="text" value={this.props.value} onChange={this.props.onChange} />
            </label>
            <div>
              <NavLink to="/quiz1" activeClassName="selected">
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