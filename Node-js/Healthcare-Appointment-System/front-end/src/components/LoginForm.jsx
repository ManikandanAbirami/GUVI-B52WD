import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import { useUserContext } from './UserContext'

//Validation Schema using yup
const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(8, 'Password must be at lease 8 characters.')
        .required('Required'),
});

function LoginForm(props) {
    const { setUser } = useUserContext();

    const navigateTo = useNavigate();
    return (
        <div>
            <h1>Login</h1>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={LoginSchema}
                onSubmit={(values, { setSubmitting }) => {
                    fetch('http://localhost:3000/auth/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(values),
                    })
                        .then(response => response.json())
                        .then(data => {
                            // Handle response data here
                            localStorage.setItem('userToken', data.token);
                            const decoded = jwt_decode(data.token);
                            setUser({ token: data.token, role: decoded.user.role })
                            navigateTo('/landing');
                            setSubmitting(false);
                        })
                        .catch(error => {
                            console.error('Error:', error);
                            setSubmitting(false);
                        })

                }}>
                {({ isSubmitting }) => (
                    <Form>

                        <Field type='email' name="email" placeholder="Email"></Field>
                        <ErrorMessage name='email' component="div"></ErrorMessage>

                        <Field type='password' name="password" placeholder="Password"></Field>
                        <ErrorMessage name='password' component="div"></ErrorMessage>

                        <button type='submit' disabled={isSubmitting}>Login</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default LoginForm