import React, { createContext, useState } from 'react'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

export const AppContext = createContext();

export const AppProvider = ({children})=>{
    const [user,setUser] = useState(null);

    const contextValue = {
        user,
        setUser
    }

    return(
        <AppContext.Provider value={contextValue}>
            <BottomSheetModalProvider>
            {children}
            </BottomSheetModalProvider>
        </AppContext.Provider>
    )
}