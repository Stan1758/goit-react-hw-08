import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import s from "./Form.module.css";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        dispatch(login(values));
        actions.resetForm();
      }}
    >
      <Form className={s.wrapper}>
        <div>
          <label className={s.label}>
            Email:
            <Field className={s.input} type="email" name="email" />
          </label>
          <ErrorMessage name="email" component="div" className={s.error} />
        </div>

        <div>
          <label className={s.label}>
            Password:
            <Field className={s.input} type="password" name="password" />
          </label>
          <ErrorMessage name="password" component="div" className={s.error} />
        </div>

        <button className={s.button} type="submit">
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
