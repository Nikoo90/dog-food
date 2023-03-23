import { Search } from "../../components/Saerch"
import style from "./Header.module.css"

export const Header = () => {

    return (
        <header className={style.header}>
            <div className="wrapper">
                <div className={style.header_container}>
                    <div className={style.logo}>
                        <h1 className={style.logo_title}>DogFood</h1>
                    </div>
                    <Search />
                </div>
            </div>
        </header>
    )
}