import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Table } from 'reactstrap';

const quizList=[{name: "Quiz1", difficulty: "Débutant"}, {name: "Quiz2", difficulty: "Confirmé"}, {name: "Quiz3", difficulty: "Expert"}]

class ModifyQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            quizList: quizList
         }
    }
    render() { 
    return ( 
        <div className="ModifyQuiz">
            <Container>
                <h1 className="adminTitle">Modification d'un quiz :</h1>
                <NavLink to="/admin" activeClassName="selected"><Button className="mb-4" color="primary" size="lg" block>Accueil Administrateur</Button ></NavLink>
                <Table className="mt-5" hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom du quiz</th>
                        <th>Difficulté</th>
                        <th>Nombre de questions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {quizList.map((quiz, index) => {
                        return (
                            <tr>
                                <th scope="row">{index}</th>
                                <td>{quiz.name}</td>
                                <td>{quiz.difficulty}</td>
                                <td>{this.state.quizList.length}</td>
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
 
 
export default ModifyQuiz;