import React from "react";
import styled, { keyframes } from "styled-components";
import { Fish } from "./Fish";
import water1 from "./assets/fala.png";
import water2 from "./assets/fala2.png";
import water3 from "./assets/fala3.png";

const Wrapper = styled.div`
  height: 23vh;
  width: 100vw;
  position: absolute;
  overflow-x: hidden;
  overflow-y: hidden;
  bottom: 0;
  background-color: bisque;
`;

const orbit = keyframes`
0%   {left:-20vw; top:0vh;}
5%   {left:-18vw; top:1vh;}
10%  {left:-16vw; top:2vh;}
15%  {left:-14vw; top:3vh;}
20%  {left:-12vw; top:2vh;}
25%  {left:-10vw; top:1vh;}
30%  {left:-8vw; top:0vh;}
35%  {left:-6vw; top:1vh;}
40%  {left:-4vw; top:2vh;}
45%  {left:-2vw; top:3vh;}
50%  {left:0vw; top:2vh;}
55%  {left:-2vw; top:1vh;}  
60%  {left:-4vw; top:0vh;}  
65%  {left:-6vw; top:1vh;}  
70%  {left:-8vw; top:2vh;}  
75%  {left:-10vw; top:3vh;}  
80%  {left:-12vw; top:2vh;}  
85%  {left:-14vw; top:1vh;}  
90%  {left:-16vw; top:0vh;}  
95%  {left:-18vw; top:1vh;}  
100% {left:-20vw; top:0vh;}  
`;

const WaterFirstLayer = styled.img.attrs({
  src: water3
})`
  /* background-image: url(${water1}); */
  width: 120vw;
  height: 26vh;
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

const WaterSecondLayer = styled.img.attrs({
  src: water2
})`
  /* background-color: aqua; */
  width: 120vw;
  height: 20vh;
  position: relative;
  bottom: 0;
  /* left: -50vw; */
  box-sizing: border-box;

  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: ${orbit};
  animation-duration: 6s;

  z-index: 2;

  margin-top: -23vh;
`;

const WaterThirdLayer = styled.img.attrs({
  src: water1
})`
  /* background-color: blue; */
  width: 120vw;
  height: 20vh;
  position: relative;
  bottom: 0;
  /* left: -50vw; */
  box-sizing: border-box;

  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: ${orbit};
  animation-duration: 4s;

  z-index: 3;

  margin-top: -16vh;
`;

export function Water() {
  return (
    <Wrapper>
      <WaterFirstLayer />
      <WaterSecondLayer />
      <WaterThirdLayer />
      <Fish />
    </Wrapper>
  );
}
