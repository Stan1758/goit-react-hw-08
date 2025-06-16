import React from "react";
import { Formik, Form, Field } from "formik";
import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.text);

  return (
    <Formik initialValues={{ search: filter }} enableReinitialize={true}>
      {() => (
        <Form className={s.wrapper}>
          <label htmlFor="search" className={s.label}>
            Find contacts by name:
          </label>
          <Field
            id="search"
            name="search"
            className={s.input}
            type="text"
            onChange={(e) => dispatch(changeFilter(e.target.value))}
          />
        </Form>
      )}
    </Formik>
  );
}

export default SearchBox;
