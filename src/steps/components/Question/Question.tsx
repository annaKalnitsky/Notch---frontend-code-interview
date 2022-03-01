import React from "react";
import './Question.scss';


interface IPageQuestionParams {
    question: JSX.Element;
}

const Question: React.FC<IPageQuestionParams> = ({question}) => {
    return (
        <div className="question">{question}</div>
    )
}



export default Question;