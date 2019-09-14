import styled from "styled-components";
import React from "react";

const Button = styled.button`
  border-radius: 25px;
  border: 3px solid;
  border-color: black;
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: white;
`;

const ButtonText = styled.h4`
  font-family: "Lato", sans-serif;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1px;
  color: black;
`;

const RadiusButton = props => (
  <Button onClick={props.onClick}>
    <ButtonText>{props.text}</ButtonText>
  </Button>
);

export default RadiusButton;
