
import React, { createContext, useReducer } from 'react'


export default (reducer, actions, defaultValue) => {
    const Context = createContext();

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, defaultValue);
        const boundaryActions = {};

        for(let key in actions){
            boundaryActions[key] = actions[key](dispatch);
        }

        return (
            <Context.Provider value={{ state, ...boundaryActions }}>
                { children }
            </Context.Provider>
        );
    }

    console.log('Provider', Provider);
    return {Context, Provider};
}
