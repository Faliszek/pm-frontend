import React from "react";
import { GameStateContext } from "./GameStateContext";

import styled from "styled-components";
import "rc-tabs/assets/index.css";
import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/TabContent";

import Button from "./Button";

import firstScreen from "./assets/koniec2.png";
import secondScreen from "./assets/start2.png";
import thirdScreen from "./assets/wygrana2.png";

let Copy1 = () => <CopyWrap src={firstScreen}></CopyWrap>;

let Copy2 = () => <CopyWrap src={secondScreen}></CopyWrap>;

let Copy3 = () => {
  return <CopyWrap src={thirdScreen}></CopyWrap>;
};

export function Failure(props) {
  let [screen, setScreen] = React.useState("0");

  let game = React.useContext(GameStateContext);

  let content = () => {
    if (screen === "0") {
      return (
        <>
          <Copy1></Copy1>
          <BtnRow bottom="10rem">
            <Button onClick={() => setScreen("1")} text="Dalej"></Button>
          </BtnRow>
        </>
      );
    } else if (screen === "1") {
      return (
        <>
          <Copy2></Copy2>
          <BtnRow bottom="7rem">
            <Button onClick={() => setScreen("2")} text="Dalej"></Button>
          </BtnRow>
        </>
      );
    } else {
      return (
        <>
          <Copy3></Copy3>
          <BtnRow
            bottom="7rem"
            onClick={() => game.dispatch({ type: "resetGame" })}
          >
            <Button text="Zagraj jeszcze raz"></Button>
          </BtnRow>
        </>
      );
    }
  };

  return (
    <Contianer>
      <Wrap>
        {/* <Tabs
          activeKey={screen}
          renderTabBar={() => <span />}
          renderTabContent={() => <TabContent />}
          onChange={key => setScreen(key)}
        >
          <TabPane tab={""} key="0">
            <Copy1 />
          </TabPane>
          <TabPane tab={""} key="1">
            <Copy2 />
          </TabPane>

          <TabPane tab={""} key="2">
            <Copy3 />
          </TabPane>
        </Tabs> */}
        {content()}
      </Wrap>
    </Contianer>
  );
}
const Contianer = styled.div`
  background-color: black;
`;

const CopyWrap = styled.img`
  width: 100vw;
  height: 100vh;
`;

const Wrap = styled.div`
  width: 90vw;
  min-height: 100vh;
  padding-left: 5vw;
  padding-right: 5vw;

  background-size: cover;
  background-position: center center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

let BtnRow = styled.div`
  display: flex;
  padding: 2rem 0;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: ${p => p.bottom};
`;

const P = styled.p`
  margin-bottom: 2rem;
  font-size: 1.75rem;
  text-align: center;
  line-height: 1.25;
`;

const PMargin = styled.p`
  max-width: 75%;
  margin-left: 12.5%;
  margin-bottom: 2rem;
  font-size: 1.75rem;
  text-align: center;
  line-height: 1.25;
`;
