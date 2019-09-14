import * as React from "react";

let CigaretteContext = React.createContext();

let initialState = {
  cigarettes: [],
  timeToNext: 5000
};

let reducer = (state, action) => {
  switch (action.type) {
    case "addCigarette":
      return { ...state, cigarettes: state.cigarettes.concat(action.payload) };

    case "update":
      return {
        ...state,
        cigarettes: state.cigarettes
          .filter(
            c => c.top <= window.screen.height - window.screen.height / 23
          )
          .map(c => ({ ...c, top: c.top + 5 }))
      };
    default:
      return state;
  }
};

function CigaretteProvider(props) {
  // [A]
  let [state, dispatch] = React.useReducer(reducer, initialState);
  let value = { state, dispatch };

  // [B]
  return (
    <CigaretteContext.Provider value={value}>
      {props.children}
    </CigaretteContext.Provider>
  );
}

let CigaretteConsumer = CigaretteContext.Consumer;

// [C]
export { CigaretteContext, CigaretteProvider, CigaretteConsumer };
