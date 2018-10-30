import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Table } from 'reactstrap';
import './AdminForm.css'
import ValidationModal from './ValidationModal.jsx'

class DeleteQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      modal: false,
      answer : "Votre question a bien été supprimée"
     }

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  getDeleteQuizz(item) {
    const url = "http://92.175.11.66:3000/teamburgers/api/questions/" + item

    const config = {
      method: 'DELETE'
    }
    fetch(url, config)
      .then(response => response.text())
      .then(this.props.refreshFetch)
      .then(this.toggle)
  }
  
  render() {
    return (
      <div className="DeleteQuiz">
        <Container>
          <h1 className="adminTitle">Supprimer un quiz :</h1>
          <NavLink to="/admin" activeClassName="selected"><Button className="mb-4" color="primary" size="lg" block>Accueil Administrateur</Button ></NavLink>
          <Table className="mb-0">
              <thead>
                  <tr className="row m-0">
                      <th className="col-1">#</th>
                      <th className="col-1">Nom du quiz</th>
                      <th className="col-8">Question</th>
                      <th className="col-2"></th>
                  </tr>
              </thead>
          </Table>
          <div className="scrollTab">
          <Table>
            <tbody className="scrolltab">
              {this.props.data.map((quiz, index) => {
                return (
                  <tr className="row">
                    <th className="col-1" scope="row">{index + 1}</th>
                    <td className="col-1">{quiz['name-quiz']}</td>
                    <td className="col-7">{quiz.question}</td>
                    <td className="col-3"><Button onClick={() => this.getDeleteQuizz(quiz.id)}>X</Button></td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
          </div>
        </Container>
        <ValidationModal 
          modal={this.state.modal}
          toggle={this.toggle}
          answer={this.state.answer}
        />
      </div>
    );
  }
}

export default DeleteQuiz;