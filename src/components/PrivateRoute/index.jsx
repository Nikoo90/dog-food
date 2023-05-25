import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { TokenContext } from "../../context/TokenContext"

export const PrivateRouter = ({ children }) => {
    const { token } = useContext(TokenContext)

    return token ? children : <Navigate to="/sign-in" />
}