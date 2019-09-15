import React from "react";
import styled from "styled-components";
import lostLife from "./assets/serceszare.png";
import life from "./assets/serceczerwone.png";

import { GameStateContext } from "./GameStateContext";

let lives = [1, 2, 3];
export function Lives() {
  const game = React.useContext(GameStateContext);

  return (
    <Styled>
      {lives.map(l => (
        <Heart key={l} src={l <= game.state.lives ? life : lostLife} />
      ))}
    </Styled>
  );
}

const Styled = styled.div`
  position: absolute;
  top: 2vh;
  left: 2vw;
  width: 40vw;
  height: 5vh;
  display: flex;
  justify-content: space-between;
`;

const Heart = styled.img`
  width: 33%;
  object-fit: contain;
`;
