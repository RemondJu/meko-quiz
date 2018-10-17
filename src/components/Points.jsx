import React, { Component } from 'react';
import './Resultat.css'

class Points extends Component {
    render() { 
        return (
            <div className="Points">
                <p>{this.props.points} Pts</p>  
            </div>
        );
    }
}
 
export default Points;