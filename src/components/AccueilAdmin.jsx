import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import './AccueilAdmin.css';
import Footer from './Footer.jsx'

class AccueilAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Container className="AccueilAdmin">
                    <Row>
                        <Col>
                            <h1 className="adminTitle">Section administrateur</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 className="adminChapo">Bonjour administrateur, quelle action souhaites-tu effectuer ?</h3>
                        </Col>
                    </Row>
                    <Row className="mt-3 pb-5">
                        <Col>
                            <NavLink to="/add" activeClassName="selected"><Button className="mb-2" color="primary" size="lg" block>Ajouter un question</Button ></NavLink>
                        </Col>
                        <Col>
                            <NavLink to="/modify" activeClassName="selected"><Button className="mb-2" color="primary" size="lg" block>Modifier un question</Button ></NavLink>
                        </Col>
                        <Col>
                            <NavLink to="/delete" activeClassName="selected"><Button className="mb-2" color="primary" size="lg" block>Supprimer un question</Button ></NavLink>
                        </Col>
                    </Row>
                    <NavLink exact to="/" activeClassName="selected"><Button color="success" size="lg">Retour au jeu</Button ></NavLink>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default AccueilAdmin;