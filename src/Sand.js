import React from "react";
import styled from "styled-components";

import { getHeight } from "./Utils";

import bg from "./assets/tlo.png";

export function Sand(props) {
  return <Wrap>{props.children}</Wrap>;
}

const Wrap = styled.div`
  height: ${getHeight(80)};
  width: 100%;
  position: relative;
  background: url(${bg}) center center;
  background-size: cover;
`;
