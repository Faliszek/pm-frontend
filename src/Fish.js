import React from "react";
import styled, { keyframes } from "styled-components";
import fishImage from "./assets/rybka.png";
import deadFishImage from "./assets/martwaryba.png";
import { GameStateContext } from "./GameStateContext";

import { getHeight } from "./Utils";

const swim = keyframes`
0% {left: 0vw; top: 0}
25% {left: calc(calc(100vw - 99px) / 2); top: ${getHeight(
  5
)}; transform: rotateY(0deg)}
49% {left: calc(100vw - 99px); top: 0; transform: rotateY(0deg)}
50% {left: calc(100vw - 100px); top: 0; transform: rotateY(180deg)}
75% {left: calc(calc(100vw - 100px) / 2); top: ${getHeight(-5)};}
99% {left: calc(0vw + 1px); top: 0; transform: rotateY(180deg)}
100% {left: 0vw; top: 0; transform: rotateY(0deg)}

`;

const dead = keyframes`
0% {transform: rotateX(0deg); top: ${props => props.top}; left: ${props =>
  props.left}}
50% {transform: rotateX(180deg); top: ${getHeight(
  -8
)}; left: calc(50vw - 75px);}
100% {transform: rotateX(180deg); top: ${getHeight(
  -8
)}; left: calc(50vw - 75px);}
`;

const Animal = styled.div`
  box-sizing: border-box;

  width: 75px;
  height: 75px;
  /* background-color: gold; */
  /* background-image: linear-gradient(to right, red, yellow); */
  margin-top: ${getHeight(-24)};
  position: relative;
  bottom: 0;

  animation-iteration-count: infinite;
  animation-timing-function: ease;
  animation-name: ${swim};
  animation-duration: 6s;
  animation-fill-mode: forwards;

  z-index: 15;
`;

const AnimalDead = styled.div`
  box-sizing: border-box;

  width: 75px;
  height: 75px;
  /* background-color: gold; */
  /* background-image: linear-gradient(to right, red, yellow); */
  margin-top: ${getHeight(-24)};
  position: relative;
  bottom: 0;

  animation-iteration-count: 1;
  animation-timing-function: ease;
  animation-name: ${dead};
  animation-duration: 6s;
  animation-fill-mode: forwards;

  z-index: 15;
`;

const AnimalImage = styled.img.attrs({
  src: fishImage
})`
  width: 75px;
  height: 75px;
`;

const DeadAnimalImage = styled.img.attrs({
  src: deadFishImage
})`
  width: 75px;
  height: 75px;
`;

export function Fish() {
  const gameStateContext = React.useContext(GameStateContext);

  let activeState = gameStateContext.state;

  let [leftFish, setLeftFish] = React.useState("0");
  let [topFish, setTopFish] = React.useState("0");

  let fishRef = React.useRef(null);

  React.useEffect(() => {
    if (fishRef.current) {
      setLeftFish(fishRef.current.getBoundingClientRect().left);
      setTopFish(fishRef.current.getBoundingClientRect().top);
    }
  }, [fishRef]);

  React.useEffect(() => {
    let intervalId = setInterval(() => {
      if (fishRef.current) {
        setLeftFish(fishRef.current.getBoundingClientRect().left);
        setTopFish(fishRef.current.getBoundingClientRect().top);
      }
    }, 500);
    return () => clearInterval(intervalId);
    //eslint-disable-next-line
  }, []);

  function gameStatus(stateContext) {
    if (stateContext.gameState === "Playing") {
      return (
        <Animal ref={fishRef}>
          <AnimalImage />
        </Animal>
      );
    } else if (
      stateContext.gameState === "GameEnded" &&
      stateContext.lives < 1
    ) {
      return (
        <AnimalDead left={leftFish + "vw"} top={topFish + "vh"}>
          <DeadAnimalImage />
        </AnimalDead>
      );
    }
  }

  return gameStatus(activeState);
}
