import React, { Component } from 'react';
import BonnesReponses from './BonnesReponses';

class Felicitation extends Component {
    render() {
        return ( 
            <div className="Felicitation">
                <p>{this.props.messageResult}</p>
                <BonnesReponses 
                nbQuestions = {this.props.nbQuestions}
                nbGoodAns={this.props.nbGoodAns}/>
            </div>
         );
    }
}

export default Felicitation;