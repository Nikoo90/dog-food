import { Formik } from "formik"
import style from "./SignIn.module.css"

export const SignIn = () => {

    return (
        <div className={style.contoiner}>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Ведите Email';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Не правильный  Email';
                    }
                    return errors;
                }}
                onSubmit={async () => {

                }}
            >

            </Formik>
        </div>
    )
}