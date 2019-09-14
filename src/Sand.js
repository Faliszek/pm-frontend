import React from "react";
import styled from "styled-components";

import { Garbage } from "./Garbage";

export function Sand(props) {
  return (
    <Wrap>
      <Garbage />
    </Wrap>
  );
}

const Wrap = styled.div`
  height: 80vh;
  width: 100%;
  background: bisque;
  position: relative;
`;
