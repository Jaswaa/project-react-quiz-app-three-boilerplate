import React from "react";
import { Link } from "react-router-dom";

const HomeComponent = () => {
  return (
    <div className="Home">
      <h3>Quiz App</h3>
      <Link to="/game">
        <button className="Start">Play</button>
      </Link>
    </div>
  );
};

export default HomeComponent;