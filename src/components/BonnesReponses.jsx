import React, { Component } from 'react';

class BonnesReponses extends Component {
    render() { 
        return (
            <div className="BonnesReponses">
                <p>Bonnes réponses: {this.props.nbGoodAns}/{this.props.nbQuestions}</p>
            </div>
        );
    }
}
 
export default BonnesReponses;