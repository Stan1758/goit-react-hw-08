import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import s from "./RegistrationForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(7, "Password must be at least 7 characters")
    .required("Password is required"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        dispatch(register(values));
        actions.resetForm();
      }}
    >
      <Form className={s.wrapper}>
        <div>
          <label className={s.label}>
            Name:
            <Field className={s.input} type="text" name="name" />
          </label>
          <ErrorMessage name="name" component="div" className={s.error} />
        </div>

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
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
