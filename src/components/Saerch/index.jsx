import { useState } from "react";
import style from "./Search.module.css"

export const Search = () => {
    const styleButton = ['fa-solid', 'fa-circle-xmark', style.button]
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const handleClick = () => {
        setValue('')
    }

    return (
        <div className={style['search-container']}>
            <input
                className={style.search}
                type="text"
                placeholder="Поиск"
                value={value}
                onChange={handleChange} />
            <div onClick={handleClick}>
                <i className={styleButton.join(" ")}></i>
            </div>
        </div>
    )
}


