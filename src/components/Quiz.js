import "./EnglishTest.css";
import { useState } from "react";

import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
function Quiz() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const {score, setScore, setGameState, Test1 } = useContext(
    GameStateContext
  );

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const nextQuestion = () => {
    let answers=Test1[currentQuestion].answer;
    answers.forEach((anr)=>{
      if (anr===optionChosen){
        setScore(score + 1);
      }
    })
    setCurrentQuestion(currentQuestion + 1);
    setOptionChosen("")
  };

  const finishQuiz = () => {
    let answers=Test1[currentQuestion].answer;
    answers.forEach((anr)=>{
      if (anr===optionChosen){
        setScore(score + 1);
      }
    })
    setGameState("finished");
    setOptionChosen("")
  };
  return (
    <>
    {Test1?(
        <div className="Quiz-Quiz">
        <p>{currentQuestion+1} / {Test1.length}</p>
        <h3 className="mx-4" dir="ltr" style={{textAlign:'left'}}>{Test1[currentQuestion].prompt}</h3>
        <div className="">
          <button
            onClick={() => {
              chooseOption("optionA");
            }}
          >
            {Test1[currentQuestion].optionA}
          </button>
          <button
            onClick={() => {
              chooseOption("optionB");
            }}
          >
            {Test1[currentQuestion].optionB}
          </button>
          <button
            onClick={() => {
              chooseOption("optionC");
            }}
          >
            {Test1[currentQuestion].optionC}
          </button>
          <button
            onClick={() => {
              chooseOption("optionD");
            }}
          >
            {Test1[currentQuestion].optionD}
          </button>
        </div>
  
        {currentQuestion === Test1.length - 1 ? (
          <button className="text-uppercase" onClick={finishQuiz} id="nextQuestion">
            Finish Quiz
          </button>
        ) : (
          <button className="text-uppercase" onClick={nextQuestion} id="nextQuestion">
            Next Question
          </button>
        )}
      </div>
    ): ('')}
  </>
  );
}

export default Quiz;