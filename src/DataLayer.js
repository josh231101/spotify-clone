import React,{createContext, useContext,useReducer} from 'react'

//Create the data layer
export const DataLayerContext = createContext();

//Chidren means what we are wrapping(APP)
export const DataLayer = ({initialState, reducer, children }) => (

    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
    )


export const useDataLayerValue = () => useContext(DataLayer)