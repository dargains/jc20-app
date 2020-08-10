import React, { useReducer, createContext } from "react";

export const AppContext = createContext();

const initialState = {
  contacts: [
    {
      id: "098",
      name: "Diana Prince",
      email: "diana@us.army.mil"
    },
    {
      id: "099",
      name: "Bruce Wayne",
      email: "bruce@batmail.com"
    },
    {
      id: "100",
      name: "Clark Kent",
      email: "clark@metropolitan.com"
    }
  ],
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
        menuIsOpen: newState
      }
    case "CHANGE_LANGUAGE":
      return {
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