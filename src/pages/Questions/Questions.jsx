import React, { useState } from "react";
import { Header, QuizCard } from "../../components";
import { useQuestion } from "../../context/question-context";
import "./Questions.css";
const Questions = () => {
  const { state } = useQuestion();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { questions } = state;

  const getNextQuestion = () => {
    setCurrentQuestion((prev) => prev + 1);
  };

  return (
    <div>
      <Header />
      <div className="questions-container">
        <QuizCard
          info={questions[currentQuestion]}
          questionNum={currentQuestion}
          totalQuestion={questions.length}
          getNextQuestion={getNextQuestion}
        />
      </div>
    </div>
  );
};

export default Questions;
