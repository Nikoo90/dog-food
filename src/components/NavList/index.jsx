import { NavLink } from "react-router-dom"
import "./NavList.module.css"



export const NavList = ({ listLink, }) => {

    return (
        <ul >
            {listLink.map((nav, index) =>
                <li key={index}>
                    <NavLink
                        className={({ isActive }) => isActive ? 'active' : ''}
                        to={nav.link}>{nav.name}
                    </NavLink>
                </li>
            )
            }
        </ul >
    )
}