import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from 'formik';

const DisplayingErrorMessagesSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Required'),
    role: Yup.string().required('Required'),
});


function UpdateUserForm({ handleUpdate, id }) {
    return (
        <>
            <Formik initialValues={{ name: '', role: '' }} validationSchema={DisplayingErrorMessagesSchema} onSubmit={(values) => {
                handleUpdate(id, values?.name || "", values?.role || "")
            }}>
                {({ isSubmitting }) => (
                    <Form>
                        <div className="userForm">
                            <div>
                                <label htmlFor="name">name: </label>
                                <Field id="name" name="name" placeholder="user name" />
                                <div className="error">
                                    <ErrorMessage name="name" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="role">role: </label>
                                <Field id="role" name="role" placeholder="user role" />
                                <div className="error">
                                    <ErrorMessage name="role" />
                                </div>
                            </div>
                            <button type="submit" disabled={isSubmitting}>Submit</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default UpdateUserForm