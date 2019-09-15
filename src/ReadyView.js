import React from "react";
import styled from "styled-components";
import { GameStateContext } from "./GameStateContext";

import { getHeight } from "./Utils";

import Button from "./Button";

import bg from "./assets/tlo.png";

const Container = styled.div`
  width: 100vw;
  height: ${getHeight(100)};
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  background: url(${bg}) center center;
  background-size: cover;
`;

const TitleText = styled.div`
  font-family: "Lato", sans-serif;
  font-weight: 600;
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 30px;
`;

export function ReadyView() {
  const gameStateContext = React.useContext(GameStateContext);

  return (
    <Container>
      <ContentWrapper>
        <TitleText>Chcesz pomóc rybce?</TitleText>
        <Button
          text="Gram"
          background="rgb(65,115,185)"
          onClick={() =>
            gameStateContext.dispatch({
              type: "updateStateGame",
              payload: "Playing"
            })
          }
        />
      </ContentWrapper>
    </Container>
  );
}
