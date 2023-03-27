import { useContext, useEffect, useState } from "react"
import { URL } from "../../utils/constans/api"
import { CardsProductsList } from "../../components/CardsProductsList"
import style from "./Products.module.css"
import { Filter } from "../../components/Filter"
import { TokenContext } from "../../context/TokenContext"
import { useNavigate } from "react-router-dom"

export const Products = () => {
    const token = useContext(TokenContext)
    const [food, setFood] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            navigate("/sign-in")
            return
        }
        const fethData = async (url) => {
            const res = await fetch(url,
                {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                })
            console.log('xaxaxa')
            if (res.statusText === "OK") {
                const data = await res.json()
                setFood(data.products)
            }
        }
        fethData(URL)
    }, [token, navigate])

    return (
        <main className={style.main}>

            <div className='wrapper'>
                <Filter />
                <div className={style['card-list']}>
                    <CardsProductsList listFood={food} />
                </div>
            </div>
        </main>
    )
}