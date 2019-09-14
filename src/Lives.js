import React from "react";
import styled from "styled-components";
// import lostLife from "./assets/lostLife";
// import life from "./assets/life";

import { GameStateContext } from "./GameStateContext";

let lives = [1, 2, 3];
export function Lives() {
  const game = React.useContext(GameStateContext);

  return (
    <Styled>
      {/* {lives.map(l =>
        l <= game.state.lives ? <Image src={life} /> : <Image src={lostLife} />
      )} */}
    </Styled>
  );
}

const Styled = styled.div`
  position: absolute;
  top: 2vh;
  left: 2vw;
`;

const Image = styled.img``;
