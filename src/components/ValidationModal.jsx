import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class ValidationModal extends Component {


  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
          <ModalHeader toggle={this.props.toggle}>Confirmation</ModalHeader>
          <ModalBody>{this.props.answer}</ModalBody>
        </Modal>
      </div>
    );
  }
}
 
export default ValidationModal;