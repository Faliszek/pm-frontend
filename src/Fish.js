import React from "react";
import styled, { keyframes } from "styled-components";

const swim = keyframes`
0% {left: 0vw; top: 0vh}
25% {left: calc(calc(100vw - 49px) / 2); top: 5vh; transform: rotateY(0deg)}
49% {left: calc(100vw - 49px); top: 0vh; transform: rotateY(0deg)}
50% {left: calc(100vw - 50px); top: 0vh; transform: rotateY(180deg)}
75% {left: calc(calc(100vw - 50px) / 2); top: -5vh;}
99% {left: calc(0vw + 1px); top: 0vh; transform: rotateY(180deg)}
100% {left: 0vw; top: 0vh; transform: rotateY(0deg)}

`;

const Animal = styled.div`
  box-sizing: border-box;

  width: 50px;
  height: 20px;
  background-color: gold;
  background-image: linear-gradient(to right, red, yellow);
  margin-top: -20vh;
  position: relative;
  bottom: 0;

  animation-iteration-count: infinite;
  animation-timing-function: ease;
  animation-name: ${swim};
  animation-duration: 6s;

  z-index: 4;
`;

export function Fish() {
  return <Animal />;
}
