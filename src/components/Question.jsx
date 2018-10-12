import React from 'react';

const Question = (props) => {
    return ( 
        <div className="Question">
            <h2>{props.quizOne.name}</h2>
            <h5>{props.quizOne.question}</h5>
        </div>
    );
}
 
export default Question;
