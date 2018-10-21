import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import AddQuestion from './AddQuestion';
import './AdminForm.css'

class AddQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            questionCount: 0,
         }
    }



    render() {

    return ( 
        <div className="AddQuiz">
            <Container className="pb-2">
                <h1 className="adminTitle">Ajouter un nouveau quiz :</h1>
                <NavLink to="/admin" activeClassName="selected"><Button color="primary" size="lg" block>Accueil Administrateur</Button ></NavLink>
                <Form className="mt-5">
                    <div className="AddForm mb-4">                    
                        <Row form>
                        <Col md={6} >
                            <FormGroup>
                            <Label for="">Nom du quiz</Label>
                            <Input type="text" name="text" id="quizName" placeholder="New quiz" />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="exampleSelect">Difficulté</Label>
                            <Input type="select" name="select" id="difficultySelect">
                                <option>Débutant</option>
                                <option>Amateur</option>
                                <option>Confirmé</option>
                                <option>Expert</option>
                                <option>Maître</option>
                            </Input>
                        </FormGroup>
                        </Col>
                        </Row>
                        <AddQuestion />
                        <Button color="light">+ Ajouter question</Button>
                    </div>
                    <Button color="primary">Envoyer</Button>
                </Form>
            </Container>
        </div>
        
     );
    }
}
 
 
export default AddQuiz;