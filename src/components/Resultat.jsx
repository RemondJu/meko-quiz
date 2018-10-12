import React, { Component } from 'react';
import Felicitation from './Felicitation';
import Score from './Score';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import './Resultat.css';

class Resultat extends Component {
    render() {
        return (
            <Container>
                 <NavLink exact to="/"       activeClassName="selected">
                    <button>Home</button>
                </NavLink> 
                <Row>
                    <Col>
                        <div className="banniere text-center">
                            <div className="div_img">
                                <img className="img-fluid fond" src="https://res.cloudinary.com/dsql7dxni/image/upload/v1539267181/Projet%202%20Quizz/Banniere_Score.png" alt="Fond-page-score" />
                            </div>
                            <div>
                                <Col>
                                    <div className="scoreEquipe">
                                        <Score />
                                        <div>
                                            <img className="trophee" src="https://res.cloudinary.com/dsql7dxni/image/upload/v1539267181/Projet%202%20Quizz/Trophee.png" alt="Coupe-Score" />
                                        </div>
                                        <Felicitation />
                                    </div>
                                </Col>
                            </div>
                        </div>
                    </Col>
                </Row>
               
            </Container >
        )
    }
}
export default Resultat;