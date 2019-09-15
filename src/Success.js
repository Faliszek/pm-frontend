import React from "react";
import styled from "styled-components";
import { getHeight } from "./Utils";

import backgroundImage from "./assets/wygrana2.png";

const Container = styled.div`
  background-color: black;
`;

const CopyWrap = styled.div`
  width: 100vw;
  height: ${getHeight(100)};
  background-image: url(${backgroundImage});
  background-repeat: round;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleText = styled.div`
  font-size: 26px;
  font-size: 600;
  color: #ff9c00;
`;

export function Success() {
  return (
    <Container>
      <CopyWrap>Success</CopyWrap>
    </Container>
  );
}
