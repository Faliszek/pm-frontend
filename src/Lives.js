import React from "react";
import styled from "styled-components";
import lostLife from "./assets/serceszare.png";
import life from "./assets/serceczerwone.png";

import { GameStateContext } from "./GameStateContext";

import { getHeight } from "./Utils";

let lives = [1, 2, 3];
export function Lives() {
  const game = React.useContext(GameStateContext);

  return (
    <Styled>
      {lives.map(l =>
        l <= game.state.lives ? <Heart src={life} /> : <Heart src={lostLife} />
      )}
    </Styled>
  );
}

const Styled = styled.div`
  position: absolute;
  top: ${getHeight(2)};
  left: 2vw;
  width: 40vw;
  height: ${getHeight(5)};
  display: flex;
  justify-content: space-between;
`;

const Heart = styled.img`
  width: 33%;
  object-fit: contain;
`;
