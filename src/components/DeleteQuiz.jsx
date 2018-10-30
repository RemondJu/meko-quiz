import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Table } from 'reactstrap';
import './AdminForm.css'
import ValidationModal from './ValidationModal.jsx';


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
          <Table className="mt-5" hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nom du quiz</th>
                <th>Difficulté</th>
                <th>Question</th>
                <th>Supprimer</th>
              </tr>
            </thead>
            <tbody>
              {this.props.data.map((quiz, index) => {
                return (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{quiz['name-quiz']}</td>
                    <td>{quiz['difficulty-quiz']}</td>
                    <td>{quiz.question}</td>
                    <td><Button onClick={() => this.getDeleteQuizz(quiz.id)}>X</Button></td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
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