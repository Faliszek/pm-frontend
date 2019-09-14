import React from "react";
import styled from "styled-components";
import Div100vh from "react-div-100vh";

import { GameStateContext } from "./GameStateContext";
import { ReadyView } from "./ReadyView";

export function Layout(props) {
  const gameStateContext = React.useContext(GameStateContext);

  let activeState = gameStateContext.state.gameState;

  function display() {
    if (activeState === "Ready") {
      return <ReadyView />;
    } else if (activeState === "Playing") {
      return <Wrap>{props.children}</Wrap>;
    } else if (activeState === "Finished") {
      return <div> </div>;
    }
  }

  return <Div100vh>{display()}</Div100vh>;
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: tomato;
  overflow-y: hidden;
`;
