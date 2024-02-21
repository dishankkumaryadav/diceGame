import React, { useState } from 'react'
import styled from 'styled-components'

const RollDice = ({currentDice, roleDice}) => {

  return (
    <DiceContainer>
        <div className='dice' onClick={roleDice}>
            <img src={`/Images/dice_${currentDice}.png`} alt="dice 1 ka image" />
        </div>
        <p>
            Click on the Dice to Roll
        </p>
    </DiceContainer>
)}

export default RollDice

const DiceContainer = styled.div`
    display: flex;
    margin-top: 48px;
    flex-direction: column;
    align-items: center;

    p{
        font-size: 24px;
    }

    .dice{
        cursor:pointer;

    }
`;