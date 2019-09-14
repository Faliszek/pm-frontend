import React from "react";
import styled from "styled-components";

export function Sand(props) {
  return <Wrap>{props.children}</Wrap>;
}

const Wrap = styled.div`
  height: 80vh;
  width: 100%;
  background: bisque;
  position: relative;
`;
