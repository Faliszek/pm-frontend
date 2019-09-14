import React from "react";
import styled from "styled-components";

export function Layout(props) {
  return <Wrap>{props.children}</Wrap>;
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: tomato;
`;
