import React from 'react';

const Question = (props) => {
    return ( 
        <div className="Question">
            <h2>{props.quizOne.q1.name}</h2>
            <h5>{props.quizOne.q1.question}</h5>
        </div>
    );
}
 
export default Question;
