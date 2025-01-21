import React, { createContext } from 'react';

export const AppContext = createContext({});

const ContextProvider = ({ children }) => {
    return (
        <AppContext.Provider value={{ name: 'Ewerton' }}>
            {children}
        </AppContext.Provider>
    );
};

export default ContextProvider;
