import React from "react";

import styled from "styled-components";

import binUp from "./assets/koszgora.png";
import binDown from "./assets/koszdol.png";

import { getHeight } from "./Utils";

const width = document.body.clientWidth;

function calculateLeft(gamma, garbageRef) {
  let newGamma = gamma;

  if (gamma >= 45) {
    newGamma = 45;
  } else if (gamma <= -45) {
    newGamma = -45;
  } else {
    newGamma = gamma;
  }
  let gammaPerPx = width / 90;

  // let garbageWidth = garbageRef.current
  //   ? garbageRef.current.offsetWidth / 2
  //   : 0;

  // let result =
  //   gamma < 0
  //     ?  + garbageWidth
  //     : gammaPerPx * newGamma - garbageWidth;

  return gammaPerPx * newGamma;
}

function calculateStartX() {
  let vh10 = width / 10;
  return width / 2 - vh10;
}

export function Garbage(props) {
  let [gamma, setGamma] = React.useState(0);

  React.useEffect(() => {
    window.ondeviceorientation = function(event) {
      setGamma(event.gamma);
    };
  }, []);
  let garbageRef = props.innerRef;

  let startX = calculateStartX();
  let newGamma = calculateLeft(gamma, garbageRef);

  return (
    <Styled left={startX} translateX={newGamma} ref={garbageRef}>
      <Image src={binUp} alt="" style={{ zIndex: 9 }} />
      <Image src={binDown} alt="" style={{ zIndex: 20 }} />
    </Styled>
  );
}

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  position: relative;
`;

const Styled = styled.div`
  width: 20vw;
  height: ${getHeight(14)};
  position: absolute;
  bottom: ${getHeight(2)};
  left: ${p => p.left + "px"};
  will-change: transform;
  transform: ${p => `translateX(${p.translateX}px)`};
  transition: 0.1s all ease-out;
  object-fit: fill;
  display: flex;
  flex-direction: column;
`;
