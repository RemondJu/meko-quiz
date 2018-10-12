import React, { Component } from 'react';
import Question from './Question'
import './Quiz.css'
import Header from './Header';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col , Button } from 'reactstrap';

class Quiz2 extends Component {
    state = {  }
    render() { 
        return (
            <div className="Quiz">
                <Header title="Burger quiz"/>
                 <Container className="p-3 mt-3">
                    <Row>
                        <Col className="text-center pb-5">
                            <Question 
                            quizOne={this.props.quizOne.q2}/>
                        </Col>
                    </Row>   
                    <hr/>        
                    <Row className="mb-2">
                        <Col >
                             <Button block 
                             disabled={this.props.disabled}
                             onClick={this.props.handleBadAns}
                             color={this.props.btnClassBad}
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
                            onClick={this.props.handleGoodAns}
                            color={this.props.btnClassGood}
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
                    <NavLink exact to="/" activeClassName="selected">
                        <Button disabled={this.props.disabledNext} color="secondary">Next</Button>{' '}
                    </NavLink>
                </Col>
            </div>              
        )
    }
}

export default Quiz2; 
