import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col , Button } from 'reactstrap';
import './AccueilAdmin.css';

class AccueilAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render()  {
    return ( 
        <Container className="AccueilAdmin">
            <Col>
                <h1 className="adminTitle mb-3">Bienvenue administrateur !</h1>
                <NavLink exact to="/" activeClassName="selected"><Button color="success">Retour au jeu</Button ></NavLink>
            </Col>
            <Row className="mt-5  pb-5">
                <Col>
                    <NavLink to="/add" activeClassName="selected"><Button color="primary" size="lg" block>Ajouter un quiz</Button ></NavLink>
                </Col>
                <Col>
                    <NavLink to="/modify" activeClassName="selected"><Button color="primary" size="lg" block>Modifier un quiz</Button ></NavLink>
                </Col>
                <Col>
                    <NavLink to="/delete" activeClassName="selected"><Button color="primary" size="lg" block>Supprimer un quiz</Button ></NavLink>
                </Col>
            </Row>
        </Container>
     );
    }
}
 
export default AccueilAdmin;