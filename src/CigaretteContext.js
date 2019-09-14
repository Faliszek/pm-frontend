import * as React from "react";

let CigaretteContext = React.createContext();

let initialState = {
  cigarettes: [],
  timeToNext: 1000
};

let setCigaretteCatched = (ref, cigarette, onCatch, onDrop) => {
  let garbageEl = ref.getBoundingClientRect();
  let { left, width, top } = garbageEl;
  let isCatched =
    //check left x is in garbage
    cigarette.left > left &&
    cigarette.left < left + width &&
    cigarette.top >= (top + cigarette.top) / 2;

  isCatched ? onCatch() : onDrop();

  return {
    ...cigarette,
    catched: isCatched
  };
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
          .filter(c => !c.catched)
          .map(c => ({ ...c, top: c.top + 5 }))
          .map(c => {
            let { garbageRef } = action.payload;
            console.log(garbageRef.current);
            return garbageRef.current
              ? setCigaretteCatched(
                  garbageRef.current,
                  c,
                  action.payload.onCatch,
                  action.payload.onDrop
                )
              : c;
          })
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
