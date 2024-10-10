import "./style.css";
import * as Yup from "yup";
import { useCallback, useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import UserDetails from "./UserDetails";

const userNameSearchSchema = Yup.object().shape({
    searchByUsername: Yup.string()
        .min(2, 'Too Short!')
        .max(120, 'Too Long!')
        .trim()
        .required('Required'),
});

function GithubProfileFinder() {

    const [loading, setLoading] = useState(false);
    const [userName, setUserName] = useState("Github");
    const [userData, setUserData] = useState([]);

    const handleSubmit = useCallback((value, { setSubmitting }) => {
        setUserName(value?.searchByUsername || "")
        setSubmitting(false);
    }, []);

    useEffect(() => {
        setLoading(true);
        fetch(`https://api.github.com/users/${userName}`)
            .then(res => res.json())
            .then(data => {
                setUserData(data);
                setLoading(false);
            })
            .catch(error => console.error("Error fetching Github Profile. ", error))
    }, [userName])

    return (
        <section className='GithubProfileFinder'>
            <h1>Github Profile Finder</h1>
            {loading && <div>Loading...</div>}
            {!loading && (<div className="GithubUser">
                <div className='input-wrapper'>
                    <Formik initialValues={{ searchByUsername: "" }} validationSchema={userNameSearchSchema} onSubmit={handleSubmit}>
                        {({ isSubmitting }) => (
                            <Form>
                                <Field id="searchByUsername" name="searchByUsername" placeholder="Search Github Username..." />
                                <div className="error">
                                    <ErrorMessage name='searchByUsername' />
                                </div>
                                <button type='submit' disabled={isSubmitting}>Submit</button>
                            </Form>
                        )
                        }
                    </Formik>
                </div>
                <UserDetails userData={userData} />
            </div>)}
        </section >
    )
}

export default GithubProfileFinder