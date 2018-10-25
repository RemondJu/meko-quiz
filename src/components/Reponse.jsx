import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Reponse extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.getAnswerBtnClass = this.getAnswerBtnClass.bind(this)
    }

    getAnswerBtnClass() {
        let btnClass = "secondary"
        if ((this.props.disabled) && (this.props.status)){
            btnClass="success"
        } else if ((this.props.disabled) && (this.props.btnClick)){
            btnClass="danger"
        } else {
            btnClass="secondary"
        }
        return btnClass;
    }

    render() { 
        {console.log(this.props)}
        return ( 
            <Button block 
            disabled={this.props.disabled}
            color={this.getAnswerBtnClass()}
            onClick={() => this.props.handleAns(this.props.status, this.props.reponseClick)}>{this.props.lettre} {this.props.reponse}</Button>
         );
    }
}
 
export default Reponse;