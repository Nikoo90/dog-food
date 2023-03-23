import { useEffect, useState } from "react"
import { TOKEN, URL } from "../../constans/url"
import { CardList } from "../../components/CardsProductsList"
import style from "./Main.module.css"

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
            <div className={[style['card-list'], 'wrapper'].join(" ")}>
                <CardList listFood={food} />
            </div>
        </main>
    )
}