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

export function Failure(props) {
  let [screen, setScreen] = React.useState("0");

  let game = React.useContext(GameStateContext);

  let content = () => {
    if (screen === "0") {
      return (
        <CopyWrap>
          <Img src={firstScreen} alt="" />
          <P top={"14rem"} color="white" size={"1.25rem"}>
            Właśnie kolejne ryby zginęły przez wyrzucone PETY na plażę, ulicę
            lub do studzienki kanalizacyjnej!
          </P>
          <BtnRow bottom="10rem">
            <Button
              background="rgb(65,115,185)"
              onClick={() => setScreen("1")}
              text="Dalej"
            ></Button>
          </BtnRow>
        </CopyWrap>
      );
    } else if (screen === "1") {
      return (
        <CopyWrap>
          <Img src={firstScreen} alt="" />
          <P color={"white"} top={"14rem"} size={"1.25rem"} weight={"400"}>
            Paląc 15 papierosów dzienie powodujesz skażenie X m3 wody i śmierć Y
            ryb niewyrzucając PETów do koszy!
          </P>
          <BtnRow bottom="10rem">
            <Button
              background="rgb(65,115,185)"
              onClick={() => setScreen("2")}
              text="Dalej"
            ></Button>
          </BtnRow>
        </CopyWrap>
      );
    } else {
      return (
        <CopyWrap>
          <Img src={secondScreen} alt="" />
          <P size="1.5rem" top="2rem" weight="700" color="rgb(221,149,36)">
            Mamy dla Ciebie zadanie -
          </P>
          <P size="1.25rem" top="5rem" color="rgb(65,115,185)" weight="400">
            zdobąć 100 punktów w grze, udostępnij akcję znajomym i odbierz
            voucher na darmowe etui
          </P>
          <BtnRow
            bottom="7rem"
            onClick={() => game.dispatch({ type: "resetGame" })}
          >
            <Button
              background="rgb(61, 38, 21)"
              text="Zagraj jeszcze raz"
            ></Button>
          </BtnRow>
        </CopyWrap>
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

const CopyWrap = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
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
  font-size: ${p => p.size};
  text-align: center;
  line-height: 1.25;
  position: absolute;
  width: 90%;
  margin-left: 5%;
  top: ${p => p.top};
  color: ${p => p.color};

  font-weight: ${p => p.weight || 400};
`;

const PMargin = styled.p`
  max-width: 75%;
  margin-left: 12.5%;
  margin-bottom: 2rem;
  font-size: 1.75rem;
  text-align: center;
  line-height: 1.25;
`;
