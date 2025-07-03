import React, { createContext, useContext, useState } from 'react'

export const CaptainContext = createContext();

export const useCaptain = () => {
    const context = useContext(CaptainContext);
    if (!context) {
        throw new Error('useCaptain must be used within a CaptainProvider');
    }
    return context;
}

const CaptainProvider = ({ children }) => {
    const [captain, setCaptain] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateCaptain = (newCaptain) => {
        setCaptain(newCaptain);
    };

    const value = {
        captain,
        setCaptain: updateCaptain,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateCaptain
    }


    return (
        <CaptainContext.Provider value={value}>
            {children}
        </CaptainContext.Provider>
    )
}

export default CaptainProvider;