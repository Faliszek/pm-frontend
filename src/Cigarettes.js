import React from "react";
import styled from "styled-components";
import { CigaretteContext } from "./CigaretteContext";
import _ from "lodash/fp";

let s = 1000 / 60;

let genX = width => Math.floor(Math.random() * (width - 20 + 1));
let generateCigarette = width =>
  console.log(width) || {
    id: _.uniqueId("c"),
    left: genX(width), //random int
    top: -50,
    catched: false
  };

const width = window.screen.width;
console.log("width", width);

export function Cigarettes(props) {
  const { state, dispatch } = React.useContext(CigaretteContext);

  React.useEffect(() => {
    let intervalId = setInterval(() => {
      dispatch({ type: "update" });
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
      {props.children}{" "}
      {state.cigarettes.map(
        c =>
          !c.catched && <Pet key={c.id} style={{ top: c.top, left: c.left }} />
      )}{" "}
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
