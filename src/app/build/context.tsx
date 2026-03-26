"use client"

import React, { createContext, useMemo } from "react"

type CustomizerControlsContext = {}

const defaultContext: CustomizerControlsContext = {}

const CustomizerControlsContext = createContext(defaultContext)

type CustomizerControlsProviderProps = {
    children?: React.ReactNode
}

export function CustomizerControlsProvider({children}:CustomizerControlsProviderProps){
    const value = useMemo<CustomizerControlsContext>(() => {
        return{}
    }, [])

    return(
        <CustomizerControlsContext.Provider value={value}>
            {children}
        </CustomizerControlsContext.Provider>
    )
}