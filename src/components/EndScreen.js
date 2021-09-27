import React from "react";
import "./EnglishTest.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";


const EndScreen = () => {
  const { score, setScore, setGameState, userName, Test1 } = useContext(
    GameStateContext
  );


  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  const results = (score*100)/Test1.length
  var level=""
  if (results<30){
    level="A1"
  } else if (results >=30 && results < 50) {
    level="A2"
  }else if(results >=50 && results < 80){
    level="B1"
  } else{
    level="B2"
  }

  return (
    <div className="Quiz-EndScreen">
      <h2 className="text-uppercase text-white">Text Finished</h2>
      <h3>Taken by {userName}</h3>
      <h3>Correct answers {score}/{Test1.length}</h3>
      <h3>Pourcentage {results.toFixed(2)}%</h3>
      <h3>Your level is {level}</h3>
      <button onClick={restartQuiz}>Restart Test</button>
    </div>
  );
};

export default EndScreen;