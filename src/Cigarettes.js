import React from "react";
import styled from "styled-components";
import { CigaretteContext } from "./CigaretteContext";

import { GameStateContext } from "./GameStateContext";
import _ from "lodash/fp";

import { Garbage } from "./Garbage";
import { Sand } from "./Sand";

import { Water } from "./Water";

let s = 1000 / 60;

let genX = width => Math.floor(Math.random() * (width - 20 + 1));
let generateCigarette = width => ({
  id: _.uniqueId("c"),
  left: genX(width), //random int
  // left: 375 / 2, //random int
  top: -50,
  catched: false,
  width: 20,
  height: 50
});

const width = window.screen.width;
console.log("width", width);

export function Cigarettes(props) {
  const { state, dispatch } = React.useContext(CigaretteContext);

  const game = React.useContext(GameStateContext);
  const garbageRef = React.useRef(null);

  React.useEffect(() => {
    let intervalId = setInterval(() => {
      dispatch({
        type: "update",
        payload: {
          garbageRef: garbageRef,
          onDrop: () => game.dispatch({ type: "reduceLives" }),
          onCatch: () => game.dispatch({ type: "addPoints" })
        }
      });
    }, s);

    return () => clearInterval(intervalId);
    //eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    let cigaretteInterval = setInterval(() => {
      console.log("create cigarette");
      dispatch({
        type: "addCigarette",
        payload: generateCigarette(width)
      });
    }, state.timeToNext);
    return () => clearInterval(cigaretteInterval);
    //eslint-disable-next-line
  }, [state.timeToNext]);

  return (
    <Wrap>
      <Sand>
        <Garbage innerRef={garbageRef} />
      </Sand>{" "}
      {state.cigarettes.map(
        c =>
          !c.catched && <Pet key={c.id} style={{ top: c.top, left: c.left }} />
      )}{" "}
      <Water />
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`;

const Pet = styled.div`
  position: absolute;
  height: 50px;
  width: 20px;
  display: block;
  background: white;
`;
