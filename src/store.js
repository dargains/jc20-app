import React, { useReducer, createContext } from "react";
import db from "./db";

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
    case "TOGGLE_HEADER_DOWN":
      return {
        ...state,
        headerDown: payload
      }
    case "SET_USER":
      payload.name = payload.name || payload.first_name
      db.user.put(payload)
      return {
        ...state,
        user: payload
      }
    case "DELETE_USER":
      db.user.clear()
      return {
        ...state,
        user: {}
      }
    case 'CLOSE_MENU':
      return {
        ...state,
        menuIsOpen: false
      }
    case "TOGGLE_MENU":
      const newState = payload || !state.menuIsOpen
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