import React from "react";
// import { useQuestion } from "../../context/question-context";
import "./Rules.css";
const Rules = ({ handleClose, showRules, username }) => {
  const showHideClassName = showRules
    ? "modal display-block"
    : "modal display-none";

  // const { getQuiz } = useQuestion();

  return (
    <div className={showHideClassName}>
      <div className="modal" style={{ display: "block" }}>
        <section className="modal-content">
          <section className="modal-header">
            {username && <p className="sm-text">Hey {username}!</p>}
            <p className="cross-btn" onClick={handleClose}>
              X
            </p>
          </section>
          <section className="modal-body">
            <p className="md-title">Welcome to Quizified</p>
            <hr />
            <p className="sm-title">Rules:</p>
            <p className="sm-text">
              1. Each category has 10 MCQ question each.
            </p>
            <p className="sm-text">
              2. There is only one correct answer for each of them.
            </p>
            <p className="sm-text">
              3. After answering all the question based on your score your name
              will be displayed on the leaderboard
            </p>
          </section>
          {username && (
            <section className="modal-action">
              {/* <button className="btn btn-primary" onClick={getQuiz}> */}
              <button className="btn btn-primary">Procced To Quiz</button>
            </section>
          )}
        </section>
      </div>
    </div>
  );
};

export default Rules;
