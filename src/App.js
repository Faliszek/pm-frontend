import React from "react";
import { Layout } from "./Layout";
import { Sand } from "./Sand";
import { Water } from "./Water";
import { CigaretteProvider, Cigarettes } from "./CigaretteContext";
import "./reset.css";

function App() {
  return (
    <CigaretteProvider>
      <Layout>
        <Cigarettes>
          <Sand />
          <Water />
        </Cigarettes>
      </Layout>
    </CigaretteProvider>
  );
}

export default App;
