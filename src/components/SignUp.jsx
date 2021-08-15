import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import Layout from "./Layout";
import { registerAction } from "../redux/actions/authActions";
import { useDispatch } from "react-redux";
import Title from "./Title";
import { useHistory } from "react-router";

const SignUp = () => {
  const validate = Yup.object({
    name: Yup.string()
      .min(3, "Must be 3 characters or more")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const register = (name, email, password) => {
    dispatch(registerAction(name, email, password));
    history.push("/login");
  };

  return (
    <Layout>
      <Title title="Signup" />
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validate}
        onSubmit={(values, { resetForm }) => {
          const { name, email, password } = values;
          register(name, email, password);
          resetForm();
        }}
      >
        <div className="form">
          <h1 className="form__title">Sign Up</h1>
          <Form className="form__form">
            <TextField label="Name: " name="name" type="text" />
            <TextField label="Email: " name="email" type="email" />
            <TextField label="Password: " name="password" type="password" />
            <TextField
              label="Confirm Password: "
              name="confirmPassword"
              type="password"
            />
            <button className="btn btn--form" type="submit">
              Register
            </button>
            <button className="btn btn--form" type="reset">
              Reset
            </button>
          </Form>
        </div>
      </Formik>
    </Layout>
  );
};

export default SignUp;
