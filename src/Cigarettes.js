import React from "react";
import styled from "styled-components";
import { CigaretteContext } from "./CigaretteContext";

let s = 1000 / 60;
let generateCigarette = () => {};

export function Cigarettes(props) {
  const cigarettesContext = React.useContext(CigaretteContext);
  React.useEffect(() => {
    let intervalId = setInterval(() => {
      cigarettesContext.dispatch({ payload: generateCigarette() });
    }, s);

    return () => clearInterval(intervalId);
  }, []);

  return <Wrap>{props.children} </Wrap>;
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`;
