import * as React from "react";

let Cigarettes = React.createContext();

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

function CigarettesProvider(props) {
  // [A]
  let [state, dispatch] = React.useReducer(reducer, initialState);
  let value = { state, dispatch };

  // [B]
  return (
    <Cigarettes.Provider value={value}>{props.children}</Cigarettes.Provider>
  );
}

let CigarettesConsumer = Cigarettes.Consumer;

// [C]
export { Cigarettes, CigarettesProvider, CigarettesConsumer };
