import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//initial State

const initialState = {
    transactions:  [
       { id: 1, text: 'Blommor', amount: -200 },
       { id: 2, text: 'Lön', amount: 3000 },
       { id: 3, text: 'Böcker', amount: -150 },
       { id: 4, text: 'Hyra', amount: -500 }
     ]
}


// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component 
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions 
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (
        <GlobalContext.Provider value={
            {transactions: state.transactions,
            deleteTransaction,
            addTransaction}
        }>
            {children}
        </GlobalContext.Provider>
    );
} 