import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { TokenContext } from "../../context/TokenContext"
import { URL } from "../../utils/constants/constants"
import style from "./Product.module.css"

export const Product = () => {

    const { token } = useContext(TokenContext)
    const { id } = useParams()
    const [food, setFood] = useState({})

    useEffect(() => {
        const fethData = async (url) => {
            const res = await fetch(url,
                {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                })
            if (res.statusText === "OK") {
                const data = await res.json()
                setFood(data)
            }
        }
        fethData(`${URL}/${id}`)
    }, [token, id])

    console.log(food)
    return (
        <div className={style.container}>
            <div className={style.description} >
                <h1>{food.name}</h1>
                <h3>{food.description}</h3>
            </div>
            <div className={style.characteristics}>
                <p>
                    Ценa: {food.price}
                </p>
                <p>
                    {food.wight && `Велечена: ${food.wight}`}
                </p>
                <p>
                    Кол-во: {food.stock}
                </p>
                <p className={style.likes}>Нравится {food.likes && food.likes.length} пользователям</p>
            </div>
            <div className={style.img}>
                <img src={food.pictures} alt={food.pictures} width={100} height={100} />

            </div>

        </div>
    )
}