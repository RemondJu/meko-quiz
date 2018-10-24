import React, { Component } from 'react';
import Felicitation from './Felicitation';
import Score from './Score';
import { NavLink } from 'react-router-dom';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Row, Col } from 'reactstrap';
import './Resultat.css';

class ResultatModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }


    toggle() {
    this.setState({
        modal: !this.state.modal
    });
    }

  render() {
      const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

      return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>Modal title</ModalHeader>
          <ModalBody>
            
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ResultatModal;