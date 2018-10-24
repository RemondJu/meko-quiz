import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Felicitation from './Felicitation';
import Score from './Score';
import { Navbar, Button, Modal, ModalBody, Container, Row, Col } from 'reactstrap';

import './Resultat.css';
import BestPlayers from './BestPlayers';

class Resultat extends Component {
    constructor(props) {
        super(props);
        this.state = {
        modal: false
        }
        this.toggle = this.toggle.bind(this);
    }
    
    componentDidMount(){
        this.props.messageDyn();
        this.props.registerFinalScore();
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Container>
                    
                    <Navbar>
                        <NavLink exact to="/" activeClassName="selected">
                            <Button className='btnResult' color="secondary" onClick={this.props.clearNbQuestions}>Accueil</Button>
                        </NavLink>
                        <Button className='btnResult' color="secondary" onClick={this.toggle}>Meilleurs Scores</Button>
                    </Navbar> 
                    <Row>
                        <Col>
                            <div className="banniere text-center">
                                <div className="div_img">
                                    <img className="img-fluid fond" src="https://res.cloudinary.com/dsql7dxni/image/upload/v1539267181/Projet%202%20Quizz/Banniere_Score.png/" alt="Fond-page-score" />
                                </div>
                                <div>
                                    <Col>
                                        <div className="scoreEquipe">
                                            <Score 
                                            value={this.props.value}
                                            points={this.props.points} />
                                            <div>
                                                <img className="trophee" src="https://res.cloudinary.com/dsql7dxni/image/upload/v1539267181/Projet%202%20Quizz/Trophee.png" alt="Coupe-Score" />
                                            </div>
                                            <Felicitation 
                                            messageResult = {this.props.messageResult}
                                            nbQuestions = {this.props.nbQuestions}
                                            nbGoodAns={this.props.nbGoodAns}/>

                                        </div>
                                    </Col>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container >
                <Modal isOpen={this.state.modal} toggle={this.toggle} className = "modal-BestPlayers">
                    <ModalBody>
                        <button className="close" onClick={this.toggle}>&times;</button>
                        <BestPlayers bestPlayersTab = {this.props.bestPlayersTab} />
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
export default Resultat;