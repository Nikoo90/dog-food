
import style from "./Profile.module.css"

export const Profile = () => {

    return (
        <div className={style.container}>
            <div className={style.profile_item}>
                <i className="fa-regular fa-heart"></i>
            </div>
            <div className={style.profile_item}>
                <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <div className={style.profile_item}>
                <i className="fa-regular fa-user"></i>
            </div>
        </div>
    )
}