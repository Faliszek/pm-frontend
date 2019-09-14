import * as React from "react";

let GameStateContext = React.createContext();

let initialState = {
  gameState: "Ready", //Ready, Finished, Playing,
  score: 0,
  lives: 3
};

let reducer = (state, action) => {
  switch (action.type) {
    case "updateStateGame":
      return { ...state, gameState: action.payload };
    case "reduceLives":
      return { ...state, lives: state.lives - 1 };
    case "addPoints":
      return { ...state, score: state.score + 1 };
    default:
      return state;
  }
};

function GameStateProvider(props) {
  let [state, dispatch] = React.useReducer(reducer, initialState);
  let value = { state, dispatch };

  return (
    <GameStateContext.Provider value={value}>
      {props.children}
    </GameStateContext.Provider>
  );
}

let GameStateConsumer = GameStateContext.Consumer;

// [C]
export { GameStateContext, GameStateProvider, GameStateConsumer };
