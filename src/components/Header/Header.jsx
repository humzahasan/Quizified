import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="landing-header">
      <Link to="/" className="lg-title">
        Quizified
      </Link>
    </header>
  );
};

export default Header;
