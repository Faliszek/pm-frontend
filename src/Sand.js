import React from "react";
import styled from "styled-components";

import { getHeight } from "./Utils";

export function Sand(props) {
  return <Wrap>{props.children}</Wrap>;
}

const Wrap = styled.div`
  height: ${getHeight(80)};
  width: 100%;
  background: bisque;
  position: relative;
`;
