import React, { createContext, useReducer } from "react";
import AppReducer from "./reducer/appReducer";

// Initial state
const initialState = {
  transactions: []
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const { transactions } = state;

  const deleteTransaction = id => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  };

  const addTransaction = transaction => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
