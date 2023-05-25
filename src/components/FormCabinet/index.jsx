import { Field, Form, Formik } from "formik"
import { useContext } from "react"
import { object, string } from "yup"
import { userSingUp } from "../../api/user"
import { TokenContext } from "../../context/TokenContext"

export const FormCabinet = ({ initialValues }) => {
    const { token } = useContext(TokenContext)
    const cabinetShema = object(
        {
            name: string().required("Заполните поле"),
            about: string().required("Заполните поле")

        }
    )
    return (
        <Formik
            onSubmit={(e) => { userSingUp(e, token); console.log(e) }}
            initialValues={initialValues}
            validationSchema={cabinetShema}
        >
            <Form>
                <Field type="text" name="name" placeholder="Имя" />
                <Field type="text" name="about" />
                <button type="submit"> изменить</button>
            </Form>
        </Formik>

    )
}