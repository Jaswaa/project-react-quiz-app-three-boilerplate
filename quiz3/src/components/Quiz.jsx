import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import quizQuestion from '../questions.json'


const QuizComponent = () => {
  const [state, setState] = useState({
    questionIndex: 0,
    question: quizQuestion[0].question,
    oA: quizQuestion[0].optionA,
    oB: quizQuestion[0].optionB,
    oC: quizQuestion[0].optionC,
    oD: quizQuestion[0].optionD,
    score: 0,
    questionsAnswered: 0,
    questionsWrong: 0,
  });
  const nav = useNavigate();


  const gotonext = () => {
    if (state.questionIndex < quizQuestion.length - 1) {
      setState((prevState) => ({
        ...prevState,

        questionIndex: prevState.questionIndex + 1,
        questionsAnswered: prevState.questionsAnswered + 1,
        question: quizQuestion[prevState.questionIndex + 1].question,
        oA: quizQuestion[prevState.questionIndex + 1].optionA,
        oB: quizQuestion[prevState.questionIndex + 1].optionB,
        oC: quizQuestion[prevState.questionIndex + 1].optionC,
        oD: quizQuestion[prevState.questionIndex + 1].optionD,

      }));
    } else {
      gotoresult();
      nav("/result");
    }
  };

  const gotoprev = () => {
    if (state.questionIndex > 0) {
      setState((prevState) => ({
        ...prevState,
        questionIndex: prevState.questionIndex - 1,
        question: quizQuestion[prevState.questionIndex - 1].question,
        oA: quizQuestion[prevState.questionIndex - 1].optionA,
        oB: quizQuestion[prevState.questionIndex - 1].optionB,
        oC: quizQuestion[prevState.questionIndex - 1].optionC,
        oD: quizQuestion[prevState.questionIndex - 1].optionD,
      }));

    }
  };

  const gotoquit = () => {
    if (window.confirm("Are you sure you want to quit?")) {
      setState({
        questionIndex: 0,
        question: quizQuestion[0].question,
        oA: quizQuestion[0].optionA,
        oB: quizQuestion[0].optionB,
        oC: quizQuestion[0].optionC,
        oD: quizQuestion[0].optionD,
        score: 0,
        questionsAnswered: 0,
        questionsWrong: 0,

      });
    }
  };

  const renderCheck = (selectedOption) => {
    const correctAnswer = quizQuestion[state.questionIndex].answer;

    if (selectedOption === correctAnswer) {
      alert("Option Clicked Is Correct");
      setState((prevState) => ({
        ...prevState,
        score: prevState.score + 1,
      }));
    } else {
      alert("Option Clicked Is Wrong");
      setState((prevState) => ({
        ...prevState,
        questionsWrong: prevState.questionsWrong + 1,
      }));
    }

    gotonext();
  };


  const gotoresult = () => {
    const questionsAttempted = state.questionsAnswered;
    const questionsWrong = state.questionsWrong;
    localStorage.clear();
    localStorage.setItem("score", state.score);
    localStorage.setItem("questionsAttempted", questionsAttempted);
    localStorage.setItem("questionsWrong", questionsWrong);

  };

  return (
    <div className="quiz">
      <h1>Question</h1>
      <p>
        {state.questionIndex + 1} of {quizQuestion.length}
      </p>
      <p className="questions">{state.question}</p>

      <div className="options">
        <div className="option" onClick={() => renderCheck(state.oA)}>
          {state.oA}
        </div>
        <div className="option" onClick={() => renderCheck(state.oB)}>
          {state.oB}
        </div>
        <div className="option" onClick={() => renderCheck(state.oC)}>
          {state.oC}
        </div>
        <div className="option" onClick={() => renderCheck(state.oD)}>
          {state.oD}
        </div>
      </div>

      <div className="buttons">
        <button className="previous" onClick={gotoprev}>
          Previous
        </button>
        <button className="Next" onClick={gotonext}>
          Next
        </button>
        <button className="Quit" onClick={gotoquit}>
          Quit
        </button>
        <Link to="/result">
          <button className="Last" onClick={gotoresult}>
            Finish
          </button>
        </Link>
      </div>
    </div>
  );
};

export default QuizComponent;