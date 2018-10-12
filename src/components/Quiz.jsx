import React, { Component } from 'react';
import Question from './Question'
import './Quiz.css'
import './Resultat.css'
import { NavLink } from 'react-router-dom';
import { Container, Row, Col , Button } from 'reactstrap';
import PlayerUI from './PlayerUI.jsx'

class Quiz extends Component {
    state = {  }
    render() { 
        return (
            <div className="Quiz">
                <PlayerUI value={this.props.value}/>
                 <Container className="p-3 mt-3">
                    <Row>
                        <Col className="text-center pb-5">
                            <Question 
                            quizOne={this.props.quizOne.q1}/>
                        </Col>
                    </Row>   
                    <hr/>        
                    <Row className="mb-2">
                        <Col >
                             <Button block 
                             disabled={this.props.disabled}
                            onClick={this.props.handleGoodAns}
                            color={this.props.btnClassGood}
                            >A: {this.props.q.reponse1.reponse}</Button>{' '}
                        </Col> 
                        <Col>
                             <Button block
                             disabled={this.props.disabled}
                            onClick={this.props.handleBadAns}
                            color={this.props.btnClassBad}
                            >B: {this.props.q.reponse2.reponse}</Button>{' '}
                        </Col>                     
                    </Row>
                    <Row>
                        <Col>
                            <Button block
                            disabled={this.props.disabled}
                            onClick={this.props.handleBadAns}
                            color={this.props.btnClassBad}
                            >C: {this.props.q.reponse3.reponse}</Button>{' '}
                        </Col> 
                        <Col>
                            <Button block
                            disabled={this.props.disabled}
                            onClick={this.props.handleBadAns}
                            color={this.props.btnClassBad}

                            >D: {this.props.q.reponse4.reponse}</Button>{' '}
                        </Col>                    
                    </Row>                    
                </Container> 
                <Col sm="2" className="offset-9 mt-4">
                    <NavLink to="/quiz2" activeClassName="selected">
                        <Button disabled={this.props.disabledNext} 
                        onClick={this.props.clearDisable}color="secondary">Next</Button>{' '}
                    </NavLink>
                </Col>
            </div>              
        )
    }
}

export default Quiz; 
