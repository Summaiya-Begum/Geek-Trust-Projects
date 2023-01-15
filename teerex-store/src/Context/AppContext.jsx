import React from 'react'
import { useReducer } from 'react'
import { createContext } from 'react'
import { Reducer } from './reducer'
const initialstate = {
    product: [],
    cart: [],
    isLoading: false,
    isError: false,
    filterData:[]
}
export const AppContext = createContext()


export default function AppContextProvider({ children }) {
    const [state, dispatch] = useReducer(Reducer, initialstate)

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}
