import * as React from "react";

let CigaretteContext = React.createContext();

let initialState = {
  cigarettes: []
};

let reducer = (state, action) => {
  switch (action.type) {
    case "addCigarette":
      return { ...state, cigarettes: state.cigarettes.concat(action.payload) };
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
