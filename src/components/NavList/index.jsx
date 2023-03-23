


export const NavList = ({ listNav, className }) => {

    return (
        <ul className={className}>
            {listNav.map((nav, id) =>
                <li key={id}>

                </li>
            )}
        </ul>
    )
}