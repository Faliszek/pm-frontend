import React from "react";
import styled from "styled-components";
import { getHeight } from "./Utils";
import Button from "./Button";

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

const ButtonWrapper = styled.div`
  margin-top: 12rem;
`;

const SHARE_URL = "http://m.me/108876870503019";

const IMAGE_URL = "https://pm.dev.codeheroes.tech/rybka.png";

function share() {
  const message = {
    attachment: {
      type: "template",
      payload: {
        template_type: "generic",
        image_aspect_ratio: "square",
        elements: [
          {
            title: "PM",
            image_url: IMAGE_URL,
            subtitle: "description",
            default_action: {
              type: "web_url",
              url: SHARE_URL
            },
            buttons: [
              {
                type: "web_url",
                url: SHARE_URL,
                title: "Sprawdź"
              }
            ]
          }
        ]
      }
    }
  };

  window.MessengerExtensions.beginShareFlow(
    function(share_response) {},
    function(errorCode, errorMessage) {
      console.log(errorCode, errorMessage);
    },
    message,
    "broadcast"
  );
}

export function Success() {
  return (
    <Container>
      <CopyWrap>
        <TitleText>GRATULACJE!</TitleText>
        <SubtitleText>
          Wszystkie PETY trafiły do kosza - uratowałeś przy tym {10 * 365} m3
          wody i {8 * 365}
          ryb w skali roku!
        </SubtitleText>
        <PromotionInfo>Oto voucher na darmowe etui</PromotionInfo>
        <ButtonWrapper>
          <Button
            background="rgb(65,115,185)"
            onClick={() => share()}
            text="Udostępnij"
          ></Button>
        </ButtonWrapper>
      </CopyWrap>
    </Container>
  );
}
