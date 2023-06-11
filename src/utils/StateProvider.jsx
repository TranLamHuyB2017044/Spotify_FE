import {createContext, useReducer}  from "react";
import reducer, { initialState }  from "./reducer";
import { useContext } from "react";
export const Context = createContext()

function StateProvider({ children }){
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}


export  const useStateProvider = () => useContext(Context)

export default StateProvider

