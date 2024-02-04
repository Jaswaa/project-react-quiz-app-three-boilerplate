import React, { useEffect } from "react";
import { Link } from "react-router-dom";


const ResultComponent = () => {
  const storedScore = localStorage.getItem("score");
  const storedQuestionsWrong = localStorage.getItem("questionsWrong");
  const storedQuestionsAttempted = localStorage.getItem("questionsAttempted");


  const percentage = (parseInt(storedScore, 10) / parseInt(storedQuestionsAttempted, 10)) * 100 || 0;

  return (
    <div className="end">
      <h1 className="result">Result</h1>
      <div className="game2">
        <h4>You need more practice!</h4>
        <p className="score">
          Your score is{" "}
          {(
            (parseInt(storedScore, 10) /
              parseInt(storedQuestionsAttempted, 10)) *
            100
          ).toFixed(2)}
          %
        </p>
        <div
        >
          <div className="Num">
            <b>Total number of questions</b>
            <b>15</b>
          </div>
          <div className="Num">
            <b>Number of attempted questions</b>
            <b>{storedQuestionsAttempted}</b>
          </div>
          <div className="Num">
            <b>Number of correct answers</b>
            <b>{storedScore}</b>
          </div>
          <div className="Num">
            <b>Number of wrong answers</b>
            <b>{storedQuestionsWrong}</b>

          </div>
        </div>
      </div>


      <div className="Button2">
        <Link to="/game">
          <button className="playagain" >Play Again</button>
        </Link>
        <Link to="/">
          <button className="Back">Back to home</button>
        </Link>
      </div>
    </div>

  );
};

export default ResultComponent;