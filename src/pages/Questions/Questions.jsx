import React from "react";
import { Header, QuizCard } from "../../components";
import "./Questions.css";
const Questions = () => {
  return (
    <div>
      <Header />
      <div className="questions-container">
        <QuizCard />
      </div>
    </div>
  );
};

export default Questions;
