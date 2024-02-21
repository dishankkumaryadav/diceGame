import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

function GamePlay() {
  const [score, setScore] = useState(0);

  const [selectedNumber, setSelectedNumber] = useState();

  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState()

  const generateRandomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min) + min);
  }

  const resetScore = () => {
    setScore(0);
  }

  const roleDice = () => {
      if(!selectedNumber) {
        setError("*You have not selected any Number");
        return;
      };
      const randomNumber = generateRandomNumber(1, 7);

      setCurrentDice((prev) => randomNumber);


      if(selectedNumber == randomNumber){
        setScore((prev) => prev + randomNumber);
      }
      else{
        setScore((prev) => prev - 2);
      }

      setSelectedNumber(undefined);
  }

  const [showRules, setShowRules] = useState(false);



  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score = {score} />
        <NumberSelector
          error = {error} 
          setError = {setError}
          selectedNumber = {selectedNumber}
          setSelectedNumber = {setSelectedNumber}
        />
      </div>
        <RollDice
          currentDice = {currentDice}
          roleDice = {roleDice}
         />
         <div className="btns">
          <OutlineButton onClick={resetScore}>Reset</OutlineButton>
          <Button
          onClick={() => {setShowRules((prev) => !prev)}}
          >
          {
          showRules ? "Hide ": "Show "}
          Game Rules</Button>
         </div>
         {showRules && <Rules/>}
    </MainContainer>
  );
}

export default GamePlay;

const MainContainer = styled.div`
    padding-top: 70px;
    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
    .btns{
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
`;
