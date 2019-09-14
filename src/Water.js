import React from "react";
import styled, { keyframes } from "styled-components";
import { Fish } from "./Fish";
import water1 from "./assets/fala.png";
import water2 from "./assets/fala2.png";
import water3 from "./assets/fala3.png";
import waterDirt3 from "./assets/brunatna3.png";
import waterDirt2 from "./assets/brunatna2.png";
import waterDirt1 from "./assets/brunatna1.png";
import { GameStateContext } from "./GameStateContext";
import { getHeight } from "./Utils";

const Wrapper = styled.div`
  height: ${getHeight(23)};
  width: 100vw;
  position: absolute;
  overflow-x: hidden;
  overflow-y: hidden;
  bottom: 0;
  background-color: bisque;
`;

const orbit = keyframes`
0%   {left:-20vw; top: ${getHeight(0)};}
5%   {left:-18vw; top: ${getHeight(1)};}
10%  {left:-16vw; top: ${getHeight(2)};}
15%  {left:-14vw; top: ${getHeight(3)};}
20%  {left:-12vw; top: ${getHeight(2)};}
25%  {left:-10vw; top: ${getHeight(1)};}
30%  {left:-8vw; top: ${getHeight(0)};}
35%  {left:-6vw; top: ${getHeight(1)};}
40%  {left:-4vw; top: ${getHeight(2)};}
45%  {left:-2vw; top: ${getHeight(3)};}
50%  {left:0vw; top: ${getHeight(2)};}
55%  {left:-2vw; top: ${getHeight(1)};}  
60%  {left:-4vw; top: ${getHeight(0)};}  
65%  {left:-6vw; top: ${getHeight(1)};}  
70%  {left:-8vw; top: ${getHeight(2)};}  
75%  {left:-10vw; top: ${getHeight(3)};}  
80%  {left:-12vw; top: ${getHeight(2)};}  
85%  {left:-14vw; top: ${getHeight(1)};}  
90%  {left:-16vw; top: ${getHeight(0)};}  
95%  {left:-18vw; top: ${getHeight(1)};}  
100% {left:-20vw; top: ${getHeight(0)};}  
`;

const WaterFirstLayer = styled.img.attrs({
  src: water3
})`
  /* background-image: url(${water1}); */
  width: 120vw;
  height: ${getHeight(26)};
  position: relative;
  bottom: 0;
  /* left: -50vw; */
  box-sizing: border-box;

  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: ${orbit};
  animation-duration: 5s;

  z-index: 1;
`;

const WaterFirstLayerDirt = styled.img.attrs({
  src: waterDirt3,
  style: ({ opacity }) => ({
    opacity
  })
})`
  /* background-image: url(${water1}); */
  width: 120vw;
  height: ${getHeight(26)};
  position: absolute;
  bottom: 0;
  /* left: -50vw; */
  box-sizing: border-box;

  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: ${orbit};
  animation-duration: 5s;

  z-index: 2;

  will-change:opacity;
  transition: 0.2s ease-out opacity;
`;

const WaterSecondLayer = styled.img.attrs({
  src: water2
})`
  /* background-color: aqua; */
  width: 120vw;
  height: ${getHeight(20)};
  position: relative;
  bottom: 0;
  /* left: -50vw; */
  box-sizing: border-box;

  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: ${orbit};
  animation-duration: 6s;

  z-index: 11;

  margin-top: ${getHeight(-23)};
`;

const WaterSecondLayerDirt = styled.img.attrs({
  src: waterDirt2,
  style: ({ opacity }) => ({
    opacity
  })
})`
  /* background-color: aqua; */
  width: 120vw;
  height: ${getHeight(20)};
  position: absolute;
  bottom: 0;
  /* left: -50vw; */
  box-sizing: border-box;

  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: ${orbit};
  animation-duration: 6s;

  z-index: 12;

  margin-top: ${getHeight(7)};

  will-change: opacity;
  transition: 0.2s ease-out opacity;
`;

const WaterThirdLayer = styled.img.attrs({
  src: water1
})`
  /* background-color: blue; */
  width: 120vw;
  height: ${getHeight(20)};
  position: relative;
  bottom: 0;
  /* left: -50vw; */
  box-sizing: border-box;

  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: ${orbit};
  animation-duration: 4s;

  z-index: 13;

  margin-top: ${getHeight(-16)};
`;

const WaterThirdLayerDirt = styled.img.attrs({
  src: waterDirt1,
  style: ({ opacity }) => ({
    opacity
  })
})`
  opacity: 1;
  /* background-color: blue; */
  width: 120vw;
  height: ${getHeight(20)};
  position: absolute;
  bottom: 0;
  /* left: -50vw; */
  box-sizing: border-box;

  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: ${orbit};
  animation-duration: 4s;

  z-index: 14;

  margin-top: ${getHeight(12)};

  will-change: opacity;
  transition: 0.5s ease-out opacity;
`;

export function Water() {
  let gameState = React.useContext(GameStateContext);

  function toOpacity(lives) {
    return {
      3: 0,
      2: 0.8,
      1: 1,
      0: 1
    }[lives];
  }

  return (
    <Wrapper>
      <WaterFirstLayer />
      <WaterFirstLayerDirt opacity={toOpacity(gameState.state.lives)} />
      <WaterSecondLayer />
      <WaterSecondLayerDirt opacity={toOpacity(gameState.state.lives)} />
      <WaterThirdLayer />
      <WaterThirdLayerDirt opacity={toOpacity(gameState.state.lives)} />
      <Fish />
    </Wrapper>
  );
}
