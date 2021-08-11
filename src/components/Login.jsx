import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import Layout from "./Layout";

const Login = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
  });

  return (
    <Layout>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
          <div className="form">
            <h1 className="form__title">Sign In</h1>
            <Form className="form__form">
              <TextField label="Email: " name="email" type="email" />
              <TextField label="Password: " name="password" type="password" />
              <button className="form__btn" type="submit">
                Login
              </button>
            </Form>
          </div>
      </Formik>
    </Layout>
  );
};

export default Login;
