import { Field, Form, Formik } from "formik"

export const Registration = () => {

    const reg = (body) => {

    }

    return (
        <div>
            <Formik

            >
                <Form>
                    <Field type="text" name="name" />
                </Form>
            </Formik>
        </div >
    )
}