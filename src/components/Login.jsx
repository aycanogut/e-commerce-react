
import React from 'react'
import { Formik, Form } from 'formik'
import { TextField } from './TextField'
import * as Yup from "yup";
import Layout from "./Layout"
export const Login = () => {
  
    const validate = Yup.object({
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required')
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

      
        <div>
            <div className="">
            <h1 className="">Sign In</h1>
            <Form>
            <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
            <button className="btn btn-dark mt-3" type="submit">Login</button>
          </Form>
            </div>
            <div className="">
                <img src="" alt="" />
            </div>
        </div>
      
    </Formik>
        </Layout>
    
  )
}

