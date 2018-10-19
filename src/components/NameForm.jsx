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
          <img className="logo_quizz" src="https://res.cloudinary.com/dsql7dxni/image/upload/v1539780744/Logo_Meko_Quizz.png" alt="Logo_Quizz"/>
          <h1 className="title-style">Choisis ton nom de Quizeur !</h1>
          <form >
            <label>
              <input className="input-style" type="text" value={this.props.value} onChange={this.props.onChange} />
            </label>
            <div>
              <NavLink to="/quiz1" activeClassName="selected">
                <input className="button-style" src="https://res.cloudinary.com/dsql7dxni/image/upload/v1539780744/btn_unpressed.png" disabled={this.props.disabledPlay} type="image" value="jouez !"/>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NameForm;