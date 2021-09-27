import "./EnglishTest.css";
import Menu from "./Menu";
import Quiz from "./Quiz";
import { Test1 } from "../helpers/Questions";
import EndScreen from "./EndScreen";
import React, { useState } from "react";
import { GameStateContext } from "../helpers/Contexts";


function EnglishTest() {

  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);


  return (
      <div className="Quiz-App">
        <h2 className="text-uppercase">General English Test</h2>
        <GameStateContext.Provider
          value={{
            gameState,
            setGameState,
            userName,
            setUserName,
            score,
            setScore,
            Test1
          }}
        >
          {gameState === "menu" && <Menu />}
          {gameState === "playing" && <Quiz />}
          {gameState === "finished" && <EndScreen />}
        </GameStateContext.Provider>
      </div>

  );
}

export default EnglishTest;