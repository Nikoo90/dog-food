import { useEffect, useState } from "react"
import { TOKEN, URL } from "../../constans/url"
import { CardsProductsList } from "../../components/CardsProductsList"
import style from "./Main.module.css"
import { Filter } from "../../components/Filter"

export const Main = () => {
    const [food, setFood] = useState([])

    useEffect(() => {
        const fethData = async (url) => {
            const res = await fetch(url,
                {
                    headers: {
                        Authorization: 'Bearer ' + TOKEN
                    }
                })
            const data = await res.json()
            setFood(data.products)
        }
        fethData(URL)
    }, [])

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