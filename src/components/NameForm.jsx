import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './NameForm.css';
import './Resultat.css'


class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert(`Hello ${this.state.value}, welcome to Quiz Cool`);
    event.preventDefault();
  }

  render() {
    return (
      <div className="form-style">
        <Container>
          <Row>
            <Col>
              <div>
                <h1 className="title-style">Choisis ton nom de Quizeur !</h1>
                <form onSubmit={this.handleSubmit}>
                  <label>
                    <input className="input-style" type="text" value={this.state.value} onChange={this.handleChange} />
                  </label>
                  <div>
                    <NavLink to="/quiz" activeClassName="selected">
                      <input className="button-style" type="submit" value="jouez !" />
                    </NavLink>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default NameForm;