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
  font-size: 27px;
  font-weight: 600;
  color: #ff9c00;
  margin-top: 2.5rem;
`;

const SubtitleText = styled.div`
  font-size: 24px;
  color: #0071bc;
  margin-top: 1rem;
  max-width: 80%;
  text-align: center;
`;

const PromotionInfo = styled.div`
  font-size: 24px;
  color: white;
  max-width: 45%;
  margin-top: 2rem;
  text-align: center;
`;

export function Success() {
  return (
    <Container>
      <CopyWrap>
        <TitleText>GRATULACJE!</TitleText>
        <SubtitleText>
          Wszystkie PETY trafiły do kosza - uratowałeś przy tym X m3 wody i Y
          ryb
        </SubtitleText>
        <PromotionInfo>Oto voucher na darmowe etui</PromotionInfo>
      </CopyWrap>
    </Container>
  );
}
