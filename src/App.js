import React from "react";
import { Layout } from "./Layout";
import { Sand } from "./Sand";
import { Water } from "./Water";
import { GameStateProvider } from "./GameStateContext";

import { Cigarettes } from "./Cigarettes";
import "./reset.css";

function App() {
  return (
    <GameStateProvider>
      <Layout>
        <Cigarettes></Cigarettes>
      </Layout>
    </GameStateProvider>
  );
}

export default App;
