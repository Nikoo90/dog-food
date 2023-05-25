import { useEffect, useState } from "react"

export const useSignIn = () => {
    const [token, setToken] = useState(undefined)
    useEffect(() => {
        const localStotageToken =  localStorage.getItem('token')
        if(localStotageToken){
            setToken(()=> localStorage.getItem('token')) 
        }
        
    }, [])



    return {token, setToken}
}