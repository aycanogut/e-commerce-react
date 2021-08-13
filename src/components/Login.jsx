import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import Layout from "./Layout";
import { useDispatch } from "react-redux";
import { loginAction } from "../redux/actions/authActions";

const Login = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
  });
  const dispatch = useDispatch();
  const login = (email, password) => dispatch(loginAction(email, password));
  return (
    <Layout>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validate}
        onSubmit={(values, { resetForm }) => {
          const { email, password } = values;
          login(email, password);
          resetForm();
        }}
      >
        <div className="form">
          <h1 className="form__title">Sign In</h1>
          <Form className="form__form">
            <TextField label="Email: " name="email" type="email" />
            <TextField label="Password: " name="password" type="password" />
            <button className="btn btn--form" type="submit">
              Login
            </button>
          </Form>
        </div>
      </Formik>
    </Layout>
  );
};

export default Login;
