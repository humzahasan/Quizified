import React, { useEffect, useState } from "react";
import { Footer, Header } from "../../components";
import "./Leaderboard.css";
import { database } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore";

const Leaderboard = () => {
  const databaseRef = collection(database, "leaderboard");
  const [leaderboard, setLeaderboard] = useState([]);

  const getLeaderboard = async () => {
    getDocs(databaseRef)
      .then((snapshot) => {
        let leaderboardArr = [];
        snapshot.forEach((doc) => {
          leaderboardArr.push({ ...doc.data(), id: doc.id });
        });
        leaderboardArr && sortScore(leaderboardArr);
      })
      .catch((err) => console.log(err));
  };

  const sortScore = (leaderboardArr) => {
    leaderboardArr && leaderboardArr.sort((a, b) => b.result - a.result);
    setLeaderboard(leaderboardArr);
  };

  useEffect(() => {
    getLeaderboard();
    sortScore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            {leaderboard &&
              leaderboard.map((person) => (
                <tr key={person.id}>
                  <td>{person.username}</td>
                  <td>{person.category}</td>
                  <td>{person.result}</td>
                  <td> {new Date(person.timestamp.toDate()).toDateString()}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Leaderboard;
