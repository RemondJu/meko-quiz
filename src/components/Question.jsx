import React from 'react';
import './Resultat.css';
import './Question.css';

const Question = (props) => {
    return ( 
        <div className="Question">
            <h2>{props.quizOne["name-quiz"]}</h2>
            <h3 className ="numeroQuestion">Question {props.questionNumber}</h3>
            <h5 className="question">{props.quizOne.question}</h5>
        </div>
    );
}
 
export default Question;
