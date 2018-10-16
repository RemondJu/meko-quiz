import React, { Component } from 'react';
import BonnesReponses from './BonnesReponses';

class Felicitation extends Component {
    render() {
        return ( 
            <div className="Felicitation">
                <p>BRAVO !</p>
                <BonnesReponses 
                nbGoodAns={this.props.nbGoodAns}/>
            </div>
         );
    }
}

export default Felicitation;