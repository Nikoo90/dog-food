import { useContext } from "react"
import { Link } from "react-router-dom"
import { HeaderNav } from "../../components/HeaderNav"
import { Profile } from "../../components/Profile"
import { Search } from "../../components/Saerch"
import { TokenContext } from "../../context/TokenContext"
import style from "./Header.module.css"

export const Header = () => {
    const token = useContext(TokenContext)
    return (
        <header className={style.header}>
            <div className="wrapper">
                <div className={style.header_container}>
                    <div className={style.logo}>
                        <h1 className={style.logo_title}>DogFood</h1>
                    </div>
                    <Search />
                    {token
                        ? <Profile />
                        : <div><Link to="/sing_in">Вход/Регистрация</Link></div>}
                </div>
                <HeaderNav />
            </div>
        </header>
    )
}