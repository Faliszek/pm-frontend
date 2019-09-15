import React from "react";
import { Layout } from "./Layout";
import { GameStateProvider } from "./GameStateContext";

import { Cigarettes } from "./Cigarettes";
import "./reset.css";

const SHARE_URL: string = "http://m.me/108876870503019";

const IMAGE_URL: string = "https://pm.dev.codeheroes.tech/rybka.png";

export function startShareFlow(userId: string, callback: () => void) {
  const message = {
    attachment: {
      type: "template",
      payload: {
        template_type: "generic",
        elements: [
          {
            title: "Play The Startup Game!",
            image_url: `${IMAGE_URL}`,
            subtitle: "Become a unicorn!",
            default_action: {
              type: "web_url",
              url: `${SHARE_URL}?ref=startupgame`
            },
            buttons: [
              {
                type: "web_url",
                url: `${SHARE_URL}?ref=startupgame`,
                title: "Play!"
              }
            ]
          }
        ]
      }
    }
  };

  window.MessengerExtensions.beginShareFlow(
    function(share_response) {
      if (share_response.is_sent) {
        callback();
      }
    },
    function(errorCode, errorMessage) {},
    message,
    "broadcast"
  );
}

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
