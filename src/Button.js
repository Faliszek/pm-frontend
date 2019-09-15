import styled from "styled-components";
import React from "react";

const Button = styled.button`
  background-color: ${p => p.background};
  border-radius: 20px;
  font-size: 0.8125rem;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  width: 300px;
  min-height: 3rem;
  transition: 0.2s all ease-out;
  padding: 0.5rem 1rem;
  display:flex;
  align-items:center;
  justify-content;
`;

const ButtonText = styled.h4`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1px;
  color: white;
`;

const RadiusButton = props => (
  <Button background={props.background} onClick={props.onClick}>
    <ButtonText>{props.text}</ButtonText>
  </Button>
);

export default RadiusButton;
