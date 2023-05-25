import { useContext, useEffect, useState } from "react"
import { FormCabinet } from "../../components/FormCabinet"
import { TokenContext } from "../../context/TokenContext"

export const Cabinet = () => {
    const { token } = useContext(TokenContext)
    const [user, setUser] = useState({})
    useEffect(() => {
        const fetchData = async (token) => {
            const res = await fetch('https://api.react-learning.ru/v2/group-11/users/me',
                {
                    method: 'GET',
                    headers: {
                        'Authorization': token
                    },

                })
            const response = await res.json()
            setUser(response)

        }
        fetchData(token)
    }, [token])


    return (

        Object.keys(user).length
        && <FormCabinet initialValues={{ name: user.name, about: user.about }} />
    )
}