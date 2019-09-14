import React from "react";
import styled from "styled-components";

export function Cigarette(props) {
  return <Wrap>{props.children} </Wrap>;
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`;
