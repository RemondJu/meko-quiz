import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const AddQuiz = () => {
    return ( 
        <div className="AddQuiz">
            <Container className="pb-2">
                <h1 className="adminTitle">Ajouter un nouveau quiz :</h1>
                <NavLink to="/admin" activeClassName="selected"><Button color="primary" size="lg" block>Accueil Administrateur</Button ></NavLink>
                <Form className="mt-5">
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
                    <FormGroup>
                        <Label >Question 1</Label>
                        <Input type="text" name="text" id="question" placeholder="How old is the universe ?"/>
                        <Row form>
                            <Col md={3}>
                                <FormGroup>
                                <Label >Réponse 1</Label>
                                <Input type="text" name="text" id="answer"/>
                                </FormGroup>  
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                <Label >Réponse 2</Label>
                                <Input type="text" name="text" id="answer"/>
                                </FormGroup>  
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                <Label >Réponse 3</Label>
                                <Input type="text" name="text" id="answer"/>
                                </FormGroup>  
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                <Label >Réponse 4</Label>
                                <Input type="text" name="text" id="answer"/>
                                </FormGroup>  
                            </Col>
                        </Row>
                    </FormGroup>
                    <Button>Envoyer</Button>
                </Form>
            </Container>
        </div>
        
     );
}
 
export default AddQuiz;