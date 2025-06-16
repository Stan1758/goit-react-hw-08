import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContacts } from "../../redux/contactsSlice";
import { nanoid } from "nanoid";

function ContactForm() {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Enter name"),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Format: 123-45-67")
      .required("Enter phone number"),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        dispatch(addContacts({ ...values, id: nanoid() }));
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
            Number:
            <Field className={s.input} type="tel" name="number" />
          </label>
          <ErrorMessage name="number" component="div" className={s.error} />
        </div>

        <button className={s.button} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
