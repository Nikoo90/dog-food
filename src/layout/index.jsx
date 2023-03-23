import { Main } from "./Main"
import { Header } from "./Header"
import { Footer } from "./Footer"

export const Layout = ({ children }) => {

    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )
}