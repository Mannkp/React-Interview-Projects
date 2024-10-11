import { Form } from "formik";
import FormField from "./FormField";

function FormComponent({ data, isSubmitting }) {
    return (
        <>
            <Form>
                {data?.map((item, index) => {
                    return (
                        <div key={index}>
                            <FormField item={item} />
                        </div>
                    )
                })}
                <button type="submit" disabled={isSubmitting}>Submit</button>
                <button type="reset" disabled={isSubmitting}>Reset</button>
            </Form>
        </>
    )
}

export default FormComponent