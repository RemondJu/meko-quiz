import React, { Component } from 'react';
import Question from './Question'
import './Quiz.css'
import './Resultat.css'
import Header from './Header';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col , Button } from 'reactstrap';

class Quiz extends Component {
    state = {  }
    render() { 
        return (
            <div className="Quiz">
                <Header title="Burger quiz"/>
                 <Container className="p-3 mt-3">
                    <Row>
                        <Col className="text-center pb-5">
                            <Question 
                            quizOne={this.props.quizOne.questions}/>
                        </Col>
                    </Row>   
                    <hr/>        
                    <Row className="mb-2">
                        <Col >
                             <Button block 
                            onClick={this.props.handleGoodAns}
                            color={this.props.btnClassGood}
                            >A: {this.props.quizOne.questions.q1.reponse1.reponse}</Button>{' '}
                        </Col> 
                        <Col>
                             <Button block
                            onClick={this.props.handleBadAns}
                            color={this.props.btnClassBad}
                            >B: {this.props.quizOne.questions.q1.reponse2.reponse}</Button>{' '}
                        </Col>                     
                    </Row>
                    <Row>
                        <Col>
                            <Button block
                            onClick={this.props.handleBadAns}
                            color={this.props.btnClassBad}
                            >C: {this.props.quizOne.questions.q1.reponse3.reponse}</Button>{' '}
                        </Col> 
                        <Col>
                            <Button block
                            onClick={this.props.handleBadAns}
                            color={this.props.btnClassBad}
                            >D: {this.props.quizOne.questions.q1.reponse4.reponse}</Button>{' '}
                        </Col>
                        <NavLink to="/resultats" activeClassName="selected">
                            <button>Click me</button>
                        </NavLink>                    
                    </Row>
                </Container> 
            </div>              
        )
    }
}

export default Quiz; 
