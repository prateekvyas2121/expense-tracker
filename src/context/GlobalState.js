import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// initial state
const initialState = {
  transactions: [
   //  { id: 0, text: 'Flower', amount: -20 },
	  // { id: 1, text: 'Salary', amount: 300 },
	  // { id: 2, text: 'Book', amount: -10 },
	  // { id: 3, text: 'Camera', amount: 150 }
  ]
}

// create context
export const GlobalContext = createContext(initialState)

// context provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

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
    <GlobalContext.Provider value = {{
    	transactions: state.transactions,
      deleteTransaction,
      addTransaction
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

