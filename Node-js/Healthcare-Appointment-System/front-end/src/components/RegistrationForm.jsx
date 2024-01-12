import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

//Validation Schema using yup
const RegistrationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(8, 'Password must be at lease 8 characters.')
        .required('Required'),
});

function RegistrationForm() {
    const navigateTo = useNavigate();
    return (
        <div>
            <h1>Registration</h1>
            <Formik
                initialValues={{ name: '', email: '', password: '' }}
                validationSchema={RegistrationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    console.log(JSON.stringify(values));
                    fetch('http://localhost:3000/auth/register', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(values),
                    })
                        .then(response => response.json())
                        .then(data => {
                            // Assuming successful registration if no errors
                            navigateTo('/login');
                            // Handle response data here
                            console.log(data);
                            setSubmitting(false);
                            resetForm()
                        })
                        .catch(error => {
                            console.error('Error:', error);
                            setSubmitting(false);
                        })

                }}>
                {({ isSubmitting }) => (
                    <Form>
                        <Field type='text' name="name" placeholder="Username"></Field>
                        <ErrorMessage name='name' component="div"></ErrorMessage>

                        <Field type='email' name="email" placeholder="Email"></Field>
                        <ErrorMessage name='email' component="div"></ErrorMessage>

                        <Field type='password' name="password" placeholder="Password"></Field>
                        <ErrorMessage name='password' component="div"></ErrorMessage>

                        <button type='submit' disabled={isSubmitting}>Register</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default RegistrationForm