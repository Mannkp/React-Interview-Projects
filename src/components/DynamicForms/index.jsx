import "./style.css";
import dummyFormData from "./dummyData";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import FormComponent from "./FormComponent";

function DynamicForms() {

    const [formData, setFormData] = useState({});
    const [initialLabels, setInitialLabels] = useState({});
    const [validations, setValidationSchema] = useState(Yup.object().shape({}));

    const handleSubmit = async (values, { setSubmitting }) => {
        console.log('Submitted Values:', values);
        setFormData(values);
        setSubmitting(false);
    }

    useEffect(() => {

        //set initial values
        let initialValues = {};

        //set validations
        let formValidation = {};

        dummyFormData && dummyFormData?.forEach((item) => {
            initialValues = { ...initialValues, [item?.label_for]: "" }
            // initialValues[item.label_for] = "";

            //validations
            if (item?.validations) {

                let validation;

                if (item.type === "number") {
                    validation = Yup.number();
                } else if (item.type === "text" || item.type === "email" || item.type === "password" || item.type === "color" || item.type === "textarea" || item.type === "select" || item.type === "radio") {
                    validation = Yup.string();
                }
                if (item.validations.required) {
                    validation = validation.required('Required');
                }
                if (item.validations.email) {
                    validation = validation.email('Invalid Email');
                }
                if (item.validations.min) {
                    validation = validation.min(item.validations.min, `Minimum length is ${item.validations.min}`);
                }
                if (item.validations.max) {
                    validation = validation.max(item.validations.max, `Maximum length is ${item.validations.max}`);
                }
                formValidation[item.name] = validation;
            }
        })

        setInitialLabels(initialValues);
        setValidationSchema(Yup.object().shape(formValidation));

    }, [dummyFormData])


    return (
        <>
            {dummyFormData &&
                <section className="Dynamic-forms-using-Formik ">
                    {initialLabels &&
                        <Formik initialValues={initialLabels} validationSchema={validations} onSubmit={handleSubmit}>
                            {({ isSubmitting }) => (
                                <FormComponent data={dummyFormData} isSubmitting={isSubmitting} />
                            )}
                        </Formik>
                    }
                    <div>
                        Submitted Form Data:
                        <ul>
                            {formData && Object.entries(formData).map(([key, value], index) => (
                                <li key={index}>{key}: {value}</li>
                            ))}
                        </ul>
                    </div>
                </section >
            }
        </>
    )
}

export default DynamicForms