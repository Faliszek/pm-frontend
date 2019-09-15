import React from "react";
import styled from "styled-components";
import { getHeight } from "./Utils";

import { GameStateContext } from "./GameStateContext";
import { ReadyView } from "./ReadyView";
import { GameOver } from "./GameOver";

export function Layout(props) {
  const gameStateContext = React.useContext(GameStateContext);

  let activeState = gameStateContext.state.gameState;

  function display() {
    if (activeState === "Ready") {
      return <ReadyView />;
    } else if (activeState === "Playing") {
      return <Wrap>{props.children}</Wrap>;
    } else if (activeState === "Finished") {
      return <GameOver />;
    }
  }

  return display();
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: ${getHeight(100)};
  background: tomato;
  overflow-y: hidden;
`;
