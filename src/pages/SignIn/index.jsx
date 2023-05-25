import { ErrorMessage, Field, Form, Formik } from "formik"
import { useState } from "react"
import { useContext, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { object, string } from "yup"
import { userSignIn } from "../../api/user"
import { TokenContext } from "../../context/TokenContext"
import style from "./SignIn.module.css"

export const SignIn = () => {
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    const { setToken, token } = useContext(TokenContext)
    useEffect(() => {
        if (token) {
            navigate("/products")
        }
    }, [token, navigate])

    const initialValues = {
        email: '',
        password: ''
    }
    const onSubmit = async (value) => {
        const res = await userSignIn(value)
        if (res.status !== 200) {
            setError(true)
            return
        }
        const response = await res.json()
        const token = response.token
        localStorage.setItem("token", token)
        setToken(token)
    }
    const singInSchema = object({
        email: string().email('Не правильный Email').required('Обязательное поле'),
        password: string().required('Обязательное поле')
    })


    return (
        <div className={style.container}>
            {error && <div>Неверный пароль или Email</div>}
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={singInSchema}
            >
                <Form className={style.form}>
                    <div className={style.container_input}>
                        <Field className={style.input} type="text" name="email" placeholder="Email" />
                        <ErrorMessage className={style.error} name="email" component="span" />
                    </div>
                    <div className={style.container_input}>
                        <Field className={style.input} type="password" name="password" placeholder="Пароль" />
                        <ErrorMessage className={style.error} name="password" component="span" />
                    </div>
                    <div>
                        <button className={style.btn} type="submit">вход</button>
                    </div>
                </Form>

            </Formik>
            <div className={style.reg}>
                <Link to="/registration" className={style.reg_link}>Регистрация</Link>
            </div>
        </div>
    )
}