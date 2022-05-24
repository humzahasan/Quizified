import React from "react";
import "./QuizCard.css";

const QuizCard = ({ info, questionNum, getNextQuestion, totalQuestion }) => {
  const { question, correctAnswer, incorrectAnswers } = info;

  const allOptions = [correctAnswer, ...incorrectAnswers].sort(
    () => Math.random() - 0.5
  );

  const updateResult = (option) => {};

  const submitResult = () => {};

  return (
    <div className="card">
      <div className="card-badge">
        <p className="card-badge-content">
          Question {questionNum + 1}/{totalQuestion}
        </p>
      </div>
      <div className="card-text">
        <p className="card-subtitle">{question}</p>
      </div>
      <div className="card-action-column">
        {allOptions.map((option, index) => (
          <button
            disabled={questionNum === 10}
            key={option + Math.random()}
            onClick={() => {
              updateResult(option);
              questionNum + 1 < 10 ? getNextQuestion() : submitResult();
            }}
            className="btn btn-outline btn-primary"
          >
            <p> {option} </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizCard;
