import React from "react";

import styled from "styled-components";

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
    <>
      <Styled left={startX} translateX={newGamma} ref={garbageRef} />
      <h1 style={{ position: "fixed", top: "10vh" }}>{gamma}</h1>
    </>
  );
}

const Styled = styled.div`
  width: 20vw;
  height: 12vh;
  background: burlywood;
  position: absolute;
  bottom: 2vh;
  left: ${p => p.left + "px"};
  will-change: transform;
  transform: ${p => `translateX(${p.translateX}px)`};
  transition: 0.1s all ease-out;
`;
