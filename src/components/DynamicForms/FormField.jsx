import { Field, ErrorMessage } from "formik";

function FormField({ item }) {
    return (
        <>
            <label htmlFor={item?.id}>{item?.label || "Input"}: </label>
            <Field
                type={item?.type && !["select", "color", "textarea"].includes(item.type) ? item.type : "text"}
                as={["select", "color", "textarea"].includes(item?.type) ? item.type : undefined}
                name={item?.name}
                id={item?.id}
                // id={!["checkbox"].includes(item?.type) ? item?.name : undefined}
                placeholder={item?.placeholder || "input"}
                value={item?.value || undefined}
            >
                {item?.options && item?.options?.map((item, index) => {
                    return (
                        <option key={index} value={item?.value}>{item?.value}</option>
                    )
                })}
            </Field>
            <div className="error">
                <ErrorMessage name={item?.name} />
            </div>
        </>
    )
}

export default FormField