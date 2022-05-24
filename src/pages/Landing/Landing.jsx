import React, { useState } from "react";
import "./Landing.css";
import Foodimg from "../../assets/food.jpg";
import Movieimg from "../../assets/movie.jpg";
import Rules from "../Rules/Rules";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

const Landing = () => {
  const [selectedMovie, setSelectedMovie] = useState(false);
  const [selectedFood, setSelectedFood] = useState(false);
  const [showRules, setShowRules] = useState(false);

  // const { username, category, setUsername, setCategory } = useQuiz();

  const getSelectedCategory = (category) => {
    console.log("here");
    // setCategory(category);
    if (category === "food") {
      setSelectedFood(!selectedFood);
      setSelectedMovie(false);
    } else {
      setSelectedMovie(!selectedMovie);
      setSelectedFood(false);
    }
  };

  const backToLanding = () => {
    setShowRules(false);
  };

  const sendQuizInfo = () => {
    console.log("clciked");
    setShowRules(true);
  };
  return (
    <>
      <div className="landing">
        <Header />
        <section className="landing-body">
          <div className="landing-category">
            <div className="card" onClick={() => getSelectedCategory("food")}>
              {selectedFood && (
                <div className="card-badge">
                  <p className="card-badge-icon">
                    <i className="fas fa-heart"></i>
                  </p>
                </div>
              )}
              <div className="card-media">
                <img
                  src={Foodimg}
                  alt="Food & Drinks category"
                  className="card-img"
                />
                <p className="card-img-overlay overlay-hover">Food & Drinks</p>
              </div>
            </div>

            <div className="card" onClick={() => getSelectedCategory("movie")}>
              {selectedMovie && (
                <div className="card-badge">
                  <p className="card-badge-icon">
                    <i className="fas fa-heart"></i>
                  </p>
                </div>
              )}
              <div className="card-media">
                <img src={Movieimg} alt="Movie Category" className="card-img" />
                <p className="card-img-overlay overlay-hover"> TV & Movies</p>
              </div>
            </div>
          </div>
          {(selectedFood || selectedMovie) && (
            <div className="landing-info">
              {/* <p className="md-title">Selected Category : {category} </p> */}
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input-box"
                // value={username}
                // onChange={(e) => setUsername(e.target.value)}
              />
              <button
                // disabled={!username}
                // className={username ? "btn btn-primary" : "btn btn-disabled"}
                onClick={sendQuizInfo}
              >
                Start Quiz
              </button>
            </div>
          )}
        </section>
        <footer className="landing-footer">
          <ul>
            <li className="cta-text" onClick={() => setShowRules(true)}>
              How To Play
            </li>

            <li className="cta-text">© Quizified</li>
            <Link to="/leaderboard" className="cta-text">
              Leaderboard
            </Link>
          </ul>
        </footer>
      </div>
      <Rules
        handleClose={backToLanding}
        showRules={showRules}
        // category={category}
        // username={username}
      />
    </>
  );
};

export default Landing;
