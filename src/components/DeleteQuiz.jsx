import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Table } from 'reactstrap';
import './AdminForm.css'

// const quizList = [{ name: "Quiz1", difficulty: "Débutant" }, { name: "Quiz2", difficulty: "Confirmé" }, { name: "Quiz3", difficulty: "Expert" }]


class DeleteQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizList: [],
    }
  }

  getDeleteQuizz(item) {
    const url = "http://92.175.11.66:3000/teamburgers/api/questions/" + item

    const config = {
      method: 'DELETE'
    }
    fetch(url, config)
      .then(response => response.text())
      .then(response => { response.error ? alert(response.error) : alert(`le quiz n°${item} à bien été supprimé`)
      window.location.reload()}
      )
  }
  componentDidMount(){
    this.setState({
      quizList: this.props.data
    })
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
              {this.props.data.map((quiz) => {
                return (
                  <tr>
                    <th scope="row">{quiz.id}</th>
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
      </div>
    );
  }
}

export default DeleteQuiz;