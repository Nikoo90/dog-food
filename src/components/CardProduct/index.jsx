import { useState } from "react"
import style from "./Card.module.css"

export const Card = ({ pictures, id, discount, price, wight, name }) => {
    const [like, setLike] = useState(false)

    const handleClick = () => {
        setLike(prev => !prev)
    }

    return (
        <div className={style.card}>
            <div className={style.container_img}>
                <img src={pictures} alt={id} width={100} height={100} />
                <div className={style.like} onClick={handleClick}>
                    {like
                        ? <i className="fa-solid fa-heart" style={{ color: 'red' }}></i>
                        : <i className="fa-regular fa-heart" ></i>
                    }
                </div>
                {!!discount
                    && <div className={style.discount_deg}>-{discount}%</div>
                }
            </div>

            <div className={style.price_container}>
                {discount
                    ? <>
                        <div className={style.discount}>{price / 100 * discount + price}₽</div>
                        <div className={style['price-discount']}>{price}₽</div>
                    </>
                    : <div className={style['price']}>{price}₽</div>
                }
            </div>
            <div className={style.wight}>{wight}</div>
            <div className={style.name}>{name}</div>
            <button className={style.btn}> В корзину </button>
        </div>
    )
}