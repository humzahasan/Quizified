import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="landing-footer">
      <ul>
        <Link to="/" className="cta-text">
          Home
        </Link>
        <li className="cta-text">© Quizified</li>
        <Link to="/leaderboard" className="cta-text">
          Leaderboard
        </Link>
      </ul>
    </footer>
  );
};

export default Footer;
