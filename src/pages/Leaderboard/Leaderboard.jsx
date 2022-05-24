import React from "react";
import { Footer, Header } from "../../components";
import "./Leaderboard.css";

const Leaderboard = () => {
  return (
    <div className="leaderboard">
      <Header />
      <div className="leaderboard-container">
        <h1 className="lg-title cta-text">Leaderboard</h1>
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Score</th>
              <th>Played on</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>User</td>
              <td>Food</td>
              <td>10</td>
              <td>22nd May</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Leaderboard;
