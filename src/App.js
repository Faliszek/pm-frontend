import React from "react";
import { Layout } from "./Layout";
import { Sand } from "./Sand";
import { Water } from "./Water";

import "./reset.css";

function App() {
  return (
    <Layout>
      <Sand />
      <Water />
    </Layout>
  );
}

export default App;
