import React from "react";
import { Layout } from "./Layout";
import { Sand } from "./Sand";
import { Water } from "./Water";
import { CigaretteProvider } from "./CigaretteContext";
import { GameStateProvider } from "./GameStateContext";

import { Cigarettes } from "./Cigarettes";
import "./reset.css";

function App() {
  return (
    <GameStateProvider>
      <CigaretteProvider>
        <Layout>
          <Cigarettes>
            <Sand />
            <Water />
          </Cigarettes>
        </Layout>
      </CigaretteProvider>
    </GameStateProvider>
  );
}

export default App;
