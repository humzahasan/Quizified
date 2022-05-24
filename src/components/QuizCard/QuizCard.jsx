import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/quiz-context";
import { toast } from "react-toastify";
import "./QuizCard.css";

import { database } from "../../config/firebase";
import { addDoc, collection } from "firebase/firestore";

const QuizCard = ({ info, questionNum, getNextQuestion, totalQuestion }) => {
  const { question, correctAnswer, incorrectAnswers } = info;

  const allOptions = [correctAnswer, ...incorrectAnswers].sort(
    () => Math.random() - 0.5
  );

  const navigate = useNavigate();
  const { setScore, username, category } = useQuiz();

  const [result, setResult] = useState(0);

  const databaseRef = collection(database, "leaderboard");

  const updateResult = (option) => {
    if (option === correctAnswer) {
      toast.success("+10 brownie points for you!");
      setResult((prev) => prev + 10);
    } else {
      toast.error("Ah, oh! -2 on those brownie points");
      setResult((prev) => prev - 2);
    }
  };

  const submitResult = () => {
    setScore(result);
    console.log("here submit");
    addDoc(databaseRef, {
      username,
      category,
      result,
      timestamp: new Date(),
    })
      .then(() => {
        navigate("/result");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

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
