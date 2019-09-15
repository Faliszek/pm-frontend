import React from "react";

import { GameStateContext } from "./GameStateContext";

import styled from "styled-components";

export function Score(props) {
  const game = React.useContext(GameStateContext);
  //chatbotId platformId userId

  return <Styled>{game.state.score}</Styled>;
}

const Styled = styled.div`
  width: 150px;
  height: 150px;
  display: block;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  top: 20vh;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  z-index: 20;
  text-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  border: 5px solid #fff;
`;
