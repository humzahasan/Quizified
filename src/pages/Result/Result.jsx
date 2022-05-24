import React from "react";
import { useNavigate } from "react-router-dom";
import { Footer, Header } from "../../components";
import "./Result.css";
const Result = () => {
  const navigate = useNavigate();
  return (
    <div className="result">
      <Header />
      <div className="result-container">
        <div className="card">
          <div className="card-text">
            <p className="card-title">
              Hey User! We hope you enjoyed the food quiz.
            </p>
            <p className="card-subtitle">
              Your score was <span className="cta-text">100</span>
            </p>
            <p className="card-subtitle">
              You answered with the accuracy of{" "}
              <span className="cta-text">{(100 / 100) * 100}%</span>
            </p>
            <p className="card-content">Think you can beat your own score ?</p>
          </div>
          <button
            className="btn btn-outline btn-primary"
            onClick={() => navigate("/")}
          >
            Play Again
          </button>
        </div>
        <div className="card">
          <div className="card-text">
            <p className="card-title">Leaderboard</p>
            <p className="card-subtitle">
              Want to see where you stand globally in the movie quiz ?
            </p>
          </div>
          <button
            className="btn  btn-primary"
            onClick={() => navigate("/leaderboard")}
          >
            Go To Leaderboard
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Result;
