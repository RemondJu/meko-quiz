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
                <PlayerUI value={this.props.value}
                points={this.props.points}/>
                 <Container className="p-3 mt-3">
                    <Row>
                        <Col className="text-center pb-5">
                            <Question 
                            quizOne={this.props.q}/>
                        </Col>
                    </Row>   
                    <hr/>        
                    <Row className="mb-lg-2">
                        <Col sm="12"  lg="6">
                             <Button block 
                             disabled={this.props.disabled}
                             onClick={() => this.props.handleAns(this.props.q.reponse1.status, "reponse1")}
                            color={this.props.btnClass1}
                            >A: {this.props.q.reponse1.reponse}</Button>{' '}
                        </Col> 
                        <Col sm="12" lg="6">
                             <Button block
                             disabled={this.props.disabled}
                             onClick={() => this.props.handleAns(this.props.q.reponse2.status, "reponse2")}
                            color={this.props.btnClass2}
                            >B: {this.props.q.reponse2.reponse}</Button>{' '}
                        </Col>                     
                    </Row>
                    <Row>
                        <Col sm="12" lg="6">
                            <Button block
                            disabled={this.props.disabled}
                            onClick={() => this.props.handleAns(this.props.q.reponse3.status, "reponse3")}
                            color={this.props.btnClass3}
                            >C: {this.props.q.reponse3.reponse}</Button>{' '}
                        </Col> 
                        <Col sm="12" lg="6">
                            <Button block
                            disabled={this.props.disabled}
                            onClick={() => this.props.handleAns(this.props.q.reponse4.status, "reponse4")}
                            color={this.props.btnClass4}

                            >D: {this.props.q.reponse4.reponse}</Button>{' '}
                        </Col>                    
                    </Row>                    
                </Container> 
                <Col sm="2" className="offset-lg-9 mt-4">
                    <NavLink to={this.props.pathquiz} activeClassName="selected">
                        <Button disabled={this.props.disabledNext} 
                        onClick={this.props.clearDisable}color="secondary">Next</Button>{' '}
                    </NavLink>
                </Col>
            </div>              
        )
    }
}

export default Quiz; 
