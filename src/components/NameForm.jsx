import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NameForm.css';


class NameForm extends Component {
  render() {
    return (
      <div className="form-style">
        <div>
          <h1 className="title-style">Choisis ton nom de Quizeur !</h1>
          <form>
            <label>
              <input className="input-style" type="text" value={this.props.value} onChange={this.props.onChange}/>
            </label>
            <div>
              <NavLink to="/lets-play" activeClassName="selected">
                <input className="button-style" type="submit" value="jouez !"/>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NameForm;