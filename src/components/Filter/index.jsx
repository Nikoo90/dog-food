import style from "./Filter.module.css"

export const Filter = () => {

    return (
        <div className={style.container}>
            <button className={style.btn}>Популярные</button>
            <button className={style.btn}>Новинки</button>
            <button className={style.btn}>Сначала дешевые</button>
            <button className={style.btn}>Сначало дорогие</button>
            <button className={style.btn}>По рейтингу</button>
            <button className={style.btn}>По скидке</button>
        </div>
    )
}