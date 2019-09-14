import React from "react";
import styled from "styled-components";
import { GameStateContext } from "./GameStateContext";

import Button from "./Button";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: bisque;
  justify-content: space-around;
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
          text="ZAGRAJ"
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
