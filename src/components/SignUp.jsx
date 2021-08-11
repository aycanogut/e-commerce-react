import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import Layout from './Layout';

const SignUp = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })
  return (
  <Layout>
      <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
        <div className="form">
          <h1 className="form__title">Sign Up</h1>
          <Form className="form__form">
            <TextField label="First Name: " name="firstName" type="text" />
            <TextField label="Last Name: " name="lastName" type="text" />
            <TextField label="Email: " name="email" type="email" />
            <TextField label="Password: " name="password" type="password" />
            <TextField label="Confirm Password: " name="confirmPassword" type="password" />
            <button className="form__btn" type="submit">Register</button>
            <button className="form__btn" type="reset">Reset</button>
          </Form>
        </div>
      
    </Formik>
  </Layout>
  )
}

export default SignUp;