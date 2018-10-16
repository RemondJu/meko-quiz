import React, { Component } from 'react';

class Equipe extends Component {
render() {
        return (
            <div className="Equipe">
                <p>{this.props.value}</p>
            </div>
        );
    }
}

export default Equipe;