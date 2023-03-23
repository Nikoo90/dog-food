import { NavList } from "../../components/NavList"
import style from "./Footer.module.css"

const listNav = [
    {
        name: 'nav',
        link: 'ddd'
    }
]
export const Footer = () => {

    return (
        <footer className={style.footer}>
            <div className={['wrapper', style.footer_content].join(' ')}>
                <div className={style.footer_logo}>
                    Dogfood
                    <p>{`© <<Интернет-магазин DogFood.ru>>`}</p>
                </div>
                <NavList listNav={listNav} className="aaaa" />
            </div>
        </footer>
    )
}