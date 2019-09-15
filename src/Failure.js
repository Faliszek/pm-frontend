import React from "react";
import { GameStateContext } from "./GameStateContext";

import styled from "styled-components";
import "rc-tabs/assets/index.css";
import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/TabContent";

import Button from "./Button";

import bg from "./assets/deep-ocean-background-vector.jpg";

let Copy = () => (
  <CopyWrap>
    <P>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta
      egestas ex. Vivamus in libero ut nunc consectetur viverra. Fusce vitae
      ligula imperdiet nibh faucibus aliquam in feugiat quam. Duis fringilla
      venenatis arcu. Quisque sodales lorem id diam viverra, a lacinia est
      hendrerit. Cras fringilla ac nunc nec lobortis. Interdum et malesuada
      fames ac ante ipsum primis in faucibus. Donec interdum euismod
      pellentesque. Mauris justo enim, cursus vitae congue ut, posuere at velit.
    </P>

    <P>
      Morbi molestie tincidunt urna nec efficitur. Maecenas imperdiet, lorem in
      ullamcorper lacinia, ligula nisi sagittis lorem, sit amet pulvinar ex
      neque vel lectus. Donec nunc sem, venenatis nec lorem sed, scelerisque
      eleifend tortor. Aenean ut ante nunc. Proin tristique, augue nec accumsan
      pharetra, ex purus consectetur neque, sit amet facilisis libero elit eget
      dui. Ut luctus purus rhoncus mauris pretium rhoncus. Sed molestie metus et
      porta egestas. Integer blandit dolor id lectus pretium, sed placerat
      sapien fringilla.{" "}
    </P>
  </CopyWrap>
);

export function Failure(props) {
  let [screen, setScreen] = React.useState("0");

  let game = React.useContext(GameStateContext);

  let button = () => {
    if (screen === "0") {
      return (
        <BtnRow>
          <Button onClick={() => setScreen("1")} text="Dalej"></Button>
        </BtnRow>
      );
    } else if (screen === "1") {
      return (
        <BtnRow>
          <Button onClick={() => setScreen("2")} text="Dalej"></Button>
        </BtnRow>
      );
    } else {
      return (
        <BtnRow onClick={() => game.dispatch({ type: "resetGame" })}>
          <Button text="Zagraj jeszcze raz"></Button>
        </BtnRow>
      );
    }
  };

  return (
    <Contianer>
      <Wrap>
        <Tabs
          activeKey={screen}
          renderTabBar={() => <span />}
          renderTabContent={() => <TabContent />}
          onChange={key => setScreen(key)}
        >
          <TabPane tab={""} key="0">
            <Copy />
          </TabPane>
          <TabPane tab={""} key="1">
            <Copy />
          </TabPane>

          <TabPane tab={""} key="2">
            <Copy />
          </TabPane>
        </Tabs>
        {button()}
      </Wrap>
    </Contianer>
  );
}
const Contianer = styled.div`
  background-color: black;
`;

const Wrap = styled.div`
  width: 100vw;
  min-height: 100vh;

  background: url(${bg});
  background-size: cover;
  background-position: center center;
  position: relative;
`;

let BtnRow = styled.div`
  display: flex;
  padding: 2rem 0;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const P = styled.p`
  margin-bottom: 1rem;
`;

const CopyWrap = styled.div`
  margin: 1rem;
  padding: 1rem;
`;
