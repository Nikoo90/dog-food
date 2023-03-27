import { Header } from "./Header"
import { Footer } from "./Footer"
import { Outlet } from "react-router-dom"
import { TokenContextProvider } from "../context/TokenContext"

export const Layout = ({ children }) => {

    return (
        <>
            <TokenContextProvider>
                <Header />
                <Outlet />
                <Footer />
            </TokenContextProvider>
        </>
    )
}