import React from "react"
import { useSignIn } from "../hooks/useSignIn"

export const TokenContext = React.createContext()
export const TokenContextProvider = ({children}) => {
    const token = useSignIn()
    return (
        <TokenContext.Provider value={token}>
            {children}
        </TokenContext.Provider>
    )
}