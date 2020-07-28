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
  loading: false,
  error: null
};

const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case "ADD_CONTACT":
      return {
        contacts: [...state.contacts, payload]
      };
    case "DEL_CONTACT":
      return {
        contacts: state.contacts.filter(
          contact => contact.id !== payload
        )
      };
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