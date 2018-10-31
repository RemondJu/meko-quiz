import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './AdminForm.css'
import ValidationModal from './ValidationModal';


class AddQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'name-quiz': '',
            'difficulty-quiz': '',
            question: '',
            'answer-1': '',
            'status-1': false,
            'answer-2': '',
            'status-2': false,
            'answer-3': '',
            'status-3': false,
            'answer-4': '',
            'status-4': false,
            modal: false,
            answer: "Votre question a bien été ajoutée"
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleChange(event) {
        this.setState({
            'status-1': false,
            'status-2': false,
            'status-3': false,
            'status-4': false,
            [event.target.id]: true
        })
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitForm(event) {
        const post = {
            'name-quiz': this.state["name-quiz"],
            'difficulty-quiz': this.state["difficulty-quiz"],
            question: this.state.question,
            'answer-1': this.state["answer-1"],
            'status-1': this.state["status-1"],
            'answer-2': this.state["answer-2"],
            'status-2': this.state["status-2"],
            'answer-3': this.state["answer-3"],
            'status-3': this.state["status-3"],
            'answer-4': this.state["answer-4"],
            'status-4': this.state["status-4"],
        }
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        };

        const url = "http://92.175.11.66:3000/teamburgers/api/questions";
        event.preventDefault();
        fetch(url, config)
            .then(res => res.json())
            .then(this.toggle)
            .then(this.setState({
                'name-quiz': '',
                'difficulty-quiz': '',
                question: '',
                'answer-1': '',
                'status-1': false,
                'answer-2': '',
                'status-2': false,
                'answer-3': '',
                'status-3': false,
                'answer-4': '',
                'status-4': false,
            }))
            .then(this.props.refreshFetch)
            .catch(event => {
                console.log('event', event);
                alert('ERREUR')
            })
    }

    render() {

        return (
            <div className="AddQuiz">
                <Container className="pb-2">
                    <h1 className="adminTitle">Ajouter une nouvelle question :</h1>
                    <NavLink to="/admin" activeClassName="selected"><Button color="primary" size="lg" block>Accueil Administrateur</Button ></NavLink>
                    <Form className="mt-5" onSubmit={this.submitForm}>
                        <div className="AddForm mb-4">
                            <Row form>
                                <Col md={6} >
                                    <FormGroup>
                                        <Label for="">Nom du quiz</Label>
                                        <Input type="text" name="name-quiz" id="name-quiz" onChange={this.onChange} value={this.state['name-quiz']} placeholder="New quiz" />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleSelect">Difficulté</Label>
                                        <Input type="select" name="difficulty-quiz" id="difficultySelect" onChange={this.onChange} value={this.state['difficulty-quiz']}>
                                            <option>Débutant</option>
                                            <option>Amateur</option>
                                            <option>Confirmé</option>
                                            <option>Expert</option>
                                            <option>Maître</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label >Question 1</Label>
                                <Input type="text" name="question" id="question" onChange={this.onChange} value={this.state.question} placeholder="How old is the universe ?" />
                                <Row form>
                                    <Col md={3}>
                                        <FormGroup>
                                            <Label >Réponse 1</Label>
                                            <Input type="text" name="answer-1" id="answer" onChange={this.onChange} value={this.state['answer-1']} />
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="radio"
                                                        name="status"
                                                        id="status-1"
                                                        onClick={this.handleChange}

                                                    />{' '}Bonne reponse
                                                </Label>
                                            </FormGroup>
                                        </FormGroup>
                                    </Col>
                                    <Col md={3}>
                                        <FormGroup>
                                            <Label >Réponse 2</Label>
                                            <Input type="text" name="answer-2" id="answer" onChange={this.onChange} value={this.state['answer-2']} />
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="radio"
                                                        name="status"
                                                        id="status-2"
                                                        onClick={this.handleChange}

                                                    />{' '}Bonne reponse
                                                </Label>
                                            </FormGroup>
                                        </FormGroup>
                                    </Col>
                                    default <Col md={3}>
                                        <FormGroup>
                                            <Label >Réponse 3</Label>
                                            <Input type="text" name="answer-3" id="answer" onChange={this.onChange} value={this.state['answer-3']} />
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="radio"
                                                        name="status"
                                                        id="status-3"
                                                        onClick={this.handleChange}
                                                    />{' '}Bonne reponse
                                                </Label>
                                            </FormGroup>
                                        </FormGroup>
                                    </Col>
                                    <Col md={3}>
                                        <FormGroup>
                                            <Label >Réponse 4</Label>
                                            <Input type="text" name="answer-4" id="answer" onChange={this.onChange} value={this.state['answer-4']} />
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="radio"
                                                        name="status"
                                                        id="status-4"
                                                        onClick={this.handleChange}

                                                    />{' '}Bonne reponse
                                                </Label>
                                            </FormGroup>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </div>
                        <Button type="submit" color="success" size="lg" block>Ajouter</Button >
                        <ValidationModal
                            modal={this.state.modal}
                            toggle={this.toggle}
                            answer={this.state.answer}
                        />
                    </Form>
                </Container>
            </div>
        );
    }
}


export default AddQuiz;