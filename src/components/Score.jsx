import React, { Component } from 'react';
import Points from './Points';
import Equipe from './Equipe';

class Score extends Component {
    render() {
        return (
            <div className="Score">
                <p>Score :</p>
                <Points />
                <Equipe />
            </div>
        )
    }
}

export default Score;