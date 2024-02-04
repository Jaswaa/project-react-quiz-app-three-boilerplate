import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
function AllRoutes() {
  return (
    
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/game" element={<Quiz />}></Route>
        <Route path="/result" element={<Result />}></Route>
      </Routes>

    </>
  );
}

export default AllRoutes;