import React, { Component } from 'react';
import Points from './Points';
import Equipe from './Equipe';

class Score extends Component {
    render() {
        return (
            <div className="Score">
                <p>Score :</p>
                <Points points={this.props.points}/>
                <Equipe value={this.props.value}/>
            </div>
        )
    }
}

export default Score;