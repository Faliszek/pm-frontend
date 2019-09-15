import React from "react";
import { GameStateContext } from "./GameStateContext";

import { Success } from "./Success";

import { Failure } from "./Failure";

export function GameOver(props) {
  const game = React.useContext(GameStateContext);

  return <div>{game.state.score >= 10 ? <Success /> : <Failure />}</div>;
}
//Zdobylem 50 pkt, nie zdobyl
