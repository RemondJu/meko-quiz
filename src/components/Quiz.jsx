import React, { Component } from 'react';
import Question from './Question';
import './Quiz.css';
import './Resultat.css';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col , Button } from 'reactstrap';
import PlayerUI from './PlayerUI.jsx';
import Reponse from './Reponse';
import Footer from './Footer.jsx'

class Quiz extends Component {
    state = {  }
    render() { 
        return (
            <div className='Quiz'>
                <PlayerUI value={this.props.value}
                points={this.props.points} />
                 <Container className='questionContainer p-3'>
                    <Row>
                        <Col className='text-center pb-5'>
                            <Question 
                            quizOne={this.props.q}
                            questionNumber = {this.props.questionNumber}
                            />
                        </Col>
                    </Row>   
                    <hr/>        
                    <Row className='mb-2'>
                        <Col xs="12"  md="6">
                            <Reponse
                            disabled={this.props.disabled}
                            handleAns={this.props.handleAns}
                            reponse={this.props.q['answer-1']}
                            status={this.props.q['status-1']}
                            btnClick={this.props.btnClick1}
                            reponseClick='reponse1Click'
                            lettre='A :'
                            />
                        </Col> 
                        <Col xs="12"  md="6">
                            <Reponse
                            disabled={this.props.disabled}
                            handleAns={this.props.handleAns}
                            reponse={this.props.q['answer-2']}
                            status={this.props.q['status-2']}
                            btnClick={this.props.btnClick2}
                            reponseClick='reponse2Click'
                            lettre='B :'
                            />
                        </Col>                     
                        <Col xs="12"  md="6">
                            <Reponse
                            disabled={this.props.disabled}
                            handleAns={this.props.handleAns}
                            reponse={this.props.q['answer-3']}
                            status={this.props.q['status-3']}
                            btnClick={this.props.btnClick3}
                            reponseClick='reponse3Click'
                            lettre='C :'
                            />
                        </Col> 
                        <Col xs="12"  md="6">
                            <Reponse
                            disabled={this.props.disabled}
                            handleAns={this.props.handleAns}
                            reponse={this.props.q['answer-4']}
                            status={this.props.q['status-4']}
                            btnClick={this.props.btnClick4}
                            reponseClick='reponse4Click'
                            lettre='D :'
                            />
                        </Col>                    
                    </Row>                    
                </Container> 
                <Col className='mt-4'>
                    <NavLink to={this.props.pathquiz} activeClassName='selected'>
                        <Button disabled={this.props.disabledNext} 
                        onClick={this.props.clearDisable}color='secondary'>Next</Button>{' '}
                    </NavLink>
                </Col>
                <Footer />
            </div>              
        )
    }
}

export default Quiz; 
