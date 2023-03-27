import style from "./HeaderNav.module.css"
import { NavLink } from "react-router-dom"


export const HeaderNav = () => {

    const listLink = [
        {
            name: 'Главная',
            link: '/'
        },
        {
            name: 'Продукты',
            link: '/products'
        },
        {
            name: 'Контакты',
            link: '/contacts'
        }
    ]

    return (
        <nav className={style.nav}>
            <ul>
                {listLink.map((link, index) => <li key={index}><NavLink to={link.link}>{link.name}</NavLink></li>
                )}
            </ul>

        </nav>
    )
}