import React, { useReducer, createContext } from "react";

export const AppContext = createContext();

const initialState = {
  language: "pt",
  menuIsOpen: false,
  loading: false,
  error: null
};

const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case "TOGGLE_MENU":
      const newState = !state.menuIsOpen
      return {
        ...state,
        menuIsOpen: newState
      }
    case "CHANGE_LANGUAGE":
      return {
        ...state,
        language: payload
      }
    default:
      throw new Error();
  }
};

export const AppContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
};