import React from "react";
import styled from "styled-components";

import { GameStateContext } from "./GameStateContext";
import _ from "lodash/fp";

import { Garbage } from "./Garbage";
import { Sand } from "./Sand";

import { Water } from "./Water";

import { Lives } from "./Lives";

import pet from "./assets/pet.png";

let s = 1000 / 60;

let genX = width => Math.floor(Math.random() * (width - 20 + 1));
let generateCigarette = width => ({
  id: _.uniqueId("c"),
  left: genX(width), //random int
  top: -50,
  catched: false,
  width: 20,
  height: 50,
  locked: false
});

const width = window.screen.width;

export function Cigarettes(props) {
  const game = React.useContext(GameStateContext);

  const garbageRef = React.useRef(null);

  React.useEffect(() => {
    let intervalId = setInterval(() => {
      game.dispatch({
        type: "updateGame",
        payload: {
          garbageRef: garbageRef
        }
      });
    }, s);

    return () => clearInterval(intervalId);
    //eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    let cigaretteInterval = setInterval(() => {
      console.log("create cigarette");
      game.dispatch({
        type: "addCigarette",
        payload: generateCigarette(width)
      });
    }, game.state.timeToNext);
    return () => clearInterval(cigaretteInterval);
    //eslint-disable-next-line
  }, [game.state.timeToNext]);

  return (
    <Wrap>
      <Sand>
        <Garbage innerRef={garbageRef} />
      </Sand>{" "}
      {game.state.cigarettes.map(c => (
        <Pet src={pet} key={c.id} style={{ top: c.top, left: c.left }} />
      ))}{" "}
      <Water />
      <Lives />
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
`;

const Pet = styled.img`
  position: absolute;
  height: 50px;
  width: 20px;
  display: block;
  z-index: 10;
`;
