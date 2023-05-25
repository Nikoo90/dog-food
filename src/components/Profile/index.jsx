
import { useContext } from "react"
import { Link } from "react-router-dom"
import { TokenContext } from "../../context/TokenContext"
import style from "./Profile.module.css"

export const Profile = () => {
    const { setToken } = useContext(TokenContext)
    const handleClick = () => {
        localStorage.removeItem("token")
        setToken(undefined)
    }
    return (
        <div className={style.container}>
            <div className={style.profile_item}>
                <i className="fa-regular fa-heart"></i>
            </div>
            <div className={style.profile_item}>
                <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <Link to="/cabinet">
                <div className={style.profile_item}>
                    <i className="fa-regular fa-user"></i>
                </div>
            </Link>
            <div className={style.profile_item} onClick={handleClick}>
                <i className="fa-solid fa-door-open"></i>
            </div>
        </div>
    )
}