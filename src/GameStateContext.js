import * as React from "react";

let GameStateContext = React.createContext();

let initialState = {
  gameState: "Ready", //Ready, Finished, Playing, GameEnded
  score: 0,
  lives: 3,
  cigarettes: [],
  timeToNext: 1250
};

let isCatched = (ref, cigarette) => {
  let garbageEl = ref.getBoundingClientRect();
  let { left, width, top } = garbageEl;
  let isCatched =
    //check left x is in garbage
    cigarette.left > left &&
    cigarette.left < left + width &&
    cigarette.top >= (top + cigarette.top) / 2;

  return isCatched;
};

let reducer = (state, action) => {
  switch (action.type) {
    case "updateStateGame":
      return { ...state, gameState: action.payload };

    case "addCigarette":
      return {
        ...state,
        cigarettes: state.cigarettes.concat(action.payload),
        timeToNext:
          state.score !== 0 && state.score % 10 === 0
            ? state.timeToNext * 0.95
            : state.timeToNext
      };
    case "resetGame":
      return { ...initialState, gameState: "Playing" };

    case "updateGame":
      let { garbageRef } = action.payload;

      // check when player looses live
      const firstUpdate = state.cigarettes.reduce((state, c) => {
        let outOfBouandry =
          c.top > window.screen.height - window.screen.height / 23;

        return outOfBouandry
          ? {
              ...state,
              cigarettes: state.cigarettes.filter(cig => cig.id !== c.id),
              lives: state.lives - 1
            }
          : state;
      }, state);

      // check when player scores
      let secondUpdate = state.cigarettes.reduce((state, c) => {
        return isCatched(garbageRef.current, c)
          ? {
              ...state,
              cigarettes: state.cigarettes.filter(cig => cig.id !== c.id),
              score: state.score + 1
            }
          : state;
      }, firstUpdate);

      // move down every cigerete
      let cigarettes = secondUpdate.cigarettes.map(c => ({
        ...c,
        top: c.top + 5
      }));

      const s = {
        ...state,
        ...secondUpdate,

        gameState: state.score >= 10 ? "Finished" : state.gameState,
        cigarettes
      };

      return s;

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
