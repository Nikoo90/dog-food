
import { NavLink } from "react-router-dom"
import style from "./Footer.module.css"

const listNav = [
    {
        name: 'Каталог',
        link: '/'
    },
    {
        name: 'Акции',
        link: '/'
    },
    {
        name: 'Новости',
        link: '/'
    },
    {
        name: 'Отзовы',
        link: '/'
    },
    {
        name: 'Оплата и доставка',
        link: '/'
    },
    {
        name: 'Часто спрашивают',
        link: '/'
    },
    {
        name: 'Обратная связь',
        link: '/'
    },
    {
        name: 'Контакты',
        link: '/'
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
                <nav className={style.nav}>
                    {listNav.map((link, index) =>
                        <li key={index}>
                            <NavLink to={link.link}>{
                                link.name}
                            </NavLink>
                        </li>)}
                </nav>
                <div className={style.contacts_container}>
                    <p>Мы на связи</p>
                    <div className={style.contacts}>
                        <a href="tel:8999000000">8-999-00-00-00</a>
                        <a href="mail:gogfood.ru@gmail.com">gogfood.ru@gmail.com</a>
                    </div>
                    <div className={style.social_media}>
                        <div>
                            <i className="fa-brands fa-whatsapp"></i>
                        </div>
                        <div>
                            <i className="fa-brands fa-telegram"></i>
                        </div>
                        <div>
                            <i className="fa-brands fa-vk"></i>
                        </div>
                        <div>
                            <i className="fa-brands fa-viber"></i>
                        </div>
                        <div>
                            <i className="fa-brands fa-square-instagram"></i>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}